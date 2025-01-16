🌟 Universal Review Scraper
A user-friendly tool to scrape and analyze reviews from any eCommerce product page.
This project uses Node.js, Express, and Puppeteer to scrape reviews dynamically from product pages and display them on a clean frontend interface.

📋 Table of Contents
📖 Overview
✨ Features
🛠 Technologies Used
⚙️ Installation
🚀 Usage
📊 Project Workflow
📜 Documentation
🤝 Contributors
📜 License
🛡️ Future Enhancements
📖 Overview
The Universal Review Scraper project enables users to scrape product reviews from any eCommerce website by simply entering the product URL. It dynamically extracts reviews, ratings, and reviewer details using Puppeteer and displays them on a user-friendly frontend.

Objectives:
✅ Extract reviews dynamically from any product page.
✅ Display results in a formatted and clean frontend.
✅ Provide customizable scraping with optional CSS selectors.
✨ Features
🌐 Universal Support: Works with multiple eCommerce platforms (Amazon, Flipkart, etc.).
🖥 Frontend Interface: Simple and attractive UI for users to input URLs and view results.
🤖 Dynamic Scraping: Extracts reviews, ratings, and reviewer information using Puppeteer.
📦 Customizable Selectors: Users can provide CSS selectors for specific websites.
🛠 Technologies Used
Backend: Node.js, Express
Frontend: HTML, CSS, JavaScript
Web Scraping: Puppeteer with Stealth Plugin
⚙️ Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/RachnaRamesh/Go-Marble-Assignment.git
cd Go-Marble-Assignment/nodejs-webscraper
Install Dependencies:

bash
Copy
Edit
npm install
Run the Project:

bash
Copy
Edit
npm start
🚀 Usage
Open the project in your browser at http://localhost:3000.
Enter a valid eCommerce product page URL (e.g., Amazon, Flipkart, etc.).
(Optional) Add custom CSS selectors to extract specific review elements.
Click "Scrape Reviews" to get the results.
📊 Project Workflow
User Input:
Users enter the product URL and optionally provide CSS selectors.
Backend API:
The /api/reviews endpoint processes the request.
Web Scraping:
Puppeteer navigates to the page, scrolls, and extracts reviews.
Data Processing:
Extracted data is formatted as JSON.
Results Display:
Reviews are displayed dynamically on the frontend.
System Architecture
Flowchart:


Detailed Workflow:


📜 Documentation
Solution Approach:
Frontend:
Allows users to input a product URL and optional selectors.
Submits the request via a simple and intuitive form.
Backend:
Receives the request and uses Puppeteer for web scraping.
Extracts review-related information like title, body, rating, and reviewer.
Output:
Sends extracted data as JSON to the frontend for display.
Instructions to Run:
Clone the repository.
Install dependencies with npm install.
Start the server using npm start.
Open http://localhost:3000 in your browser to interact with the scraper.
Example API Usage:
Request:

json
Copy
Edit
POST /api/reviews
{
  "url": "https://www.amazon.in/dp/B08N5WRWNW",
  "selectors": {
    "reviewContainer": ".review",
    "title": ".title",
    "body": ".content",
    "rating": ".rating"
  }
}
Response:

json
Copy
Edit
{
  "reviews_count": 5,
  "reviews": [
    {
      "title": "Great Product!",
      "body": "I loved this product, highly recommend it!",
      "reviewer": "John Doe",
      "rating": "5 stars"
    }
  ]
}
🤝 Contributors
Rachna Ramesh
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🛡️ Future Enhancements
🚀 Extend support to additional eCommerce platforms (Myntra, Shopify).
🔍 Add advanced filtering for reviews (e.g., keyword search, sentiment analysis).
🌐 Enable scraping of multilingual reviews.
