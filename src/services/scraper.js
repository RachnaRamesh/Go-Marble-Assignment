const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

/**
 * Scrapes reviews from the provided URL.
 * @param {string} url - The product page URL.
 * @param {object} customSelectors - Optional custom selectors for specific platforms.
 * @returns {Array} - List of extracted reviews.
 */
const scrapePage = async (url, customSelectors = null) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  try {
    // Set headers and navigate to the URL
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    );
    await page.setExtraHTTPHeaders({ "accept-language": "en-US,en;q=0.9" });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });

    // Scroll to load dynamic content
    await page.evaluate(async () => {
      for (let i = 0; i < 10; i++) {
        window.scrollBy(0, window.innerHeight);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    });

    // Default selectors for heuristic matching
    const defaultSelectors = {
      reviewContainer: "*", // General match for all elements
      title: "h3, .title, [data-hook='review-title'], .review-title",
      body: "p, .content, .review-text-content, span",
      reviewer: ".name, .profile, .reviewer, [data-hook='review-author']",
      rating: ".stars, .score, .rating, [data-hook='review-star-rating'] span",
    };

    // Use custom selectors if provided; otherwise, use default selectors
    const selectors = customSelectors || defaultSelectors;

    // Heuristic approach: Identify the most likely review elements
    const reviews = await page.evaluate((selectors) => {
      const containers = document.querySelectorAll(selectors.reviewContainer);
      return Array.from(containers)
        .map((container) => {
          const text = container.innerText?.toLowerCase();
          if (
            text &&
            (text.includes("review") || text.includes("rating") || text.includes("feedback"))
          ) {
            return {
              title: container.querySelector(selectors.title)?.innerText.trim() || null,
              body: container.querySelector(selectors.body)?.innerText.trim() || null,
              reviewer: container.querySelector(selectors.reviewer)?.innerText.trim() || null,
              rating: container.querySelector(selectors.rating)?.innerText.trim() || null,
            };
          }
          return null;
        })
        .filter((review) => review && (review.title || review.body || review.rating)); // Filter out empty reviews
    }, selectors);

    await browser.close();

    if (reviews.length === 0) {
      console.warn("No valid reviews detected. Check the selectors or page structure.");
      return [];
    }

    return reviews;
  } catch (error) {
    console.error("Error scraping page:", error.message);
    await browser.close();
    throw new Error("Failed to scrape the page");
  }
};

module.exports = scrapePage;
