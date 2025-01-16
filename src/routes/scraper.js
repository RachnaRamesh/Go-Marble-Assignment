const express = require("express");
const scrapePage = require("../services/scraper");

const router = express.Router();

/**
 * POST /api/reviews
 * Body: { url: string, selectors?: object }
 * Description: Scrapes reviews from the provided URL.
 */
router.post("/reviews", async (req, res) => {
  const { url, selectors } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const reviews = await scrapePage(url, selectors);

    if (reviews.length === 0) {
      return res.status(200).json({
        message: "No reviews found. The page structure might not contain visible reviews.",
      });
    }

    res.json({
      reviews_count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Error scraping reviews:", error.message);
    res.status(500).json({ error: "Failed to scrape reviews" });
  }
});

module.exports = router;
