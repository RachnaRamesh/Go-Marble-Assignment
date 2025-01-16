const axios = require("axios");
const cheerio = require("cheerio");
const scrapeReviews = require("../services/scraper");

const scrapeWithPagination = async (url, selectors, pagination = true, maxPages = 5) => {
  const reviews = [];
  let currentUrl = url;

  for (let i = 0; i < maxPages; i++) {
    console.log(`Scraping page: ${currentUrl}`);

    const { data } = await axios.get(currentUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const pageReviews = await scrapeReviews(data, selectors);
    reviews.push(...pageReviews);

    if (!pagination) break;

    const $ = cheerio.load(data);
    const nextPage = $(".pagination-next").attr("href"); // Update based on target site
    if (!nextPage) break;

    currentUrl = nextPage.startsWith("http")
      ? nextPage
      : new URL(nextPage, currentUrl).href;
  }

  return reviews;
};

module.exports = scrapeWithPagination;
