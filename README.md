# 🌟 Universal Review Scraper

> **A user-friendly tool to scrape and analyze reviews from any eCommerce product page.**  
This project uses Node.js, Express, and Puppeteer to scrape reviews dynamically from product pages and display them on a clean frontend interface.



## 📋 Table of Contents
- [📖 Overview](#-overview)
- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📊 Project Workflow](#-project-workflow)
- [📜 Documentation](#-documentation)
- [🤝 Contributors](#-contributors)
- [📜 License](#-license)
- [🛡️ Future Enhancements](#-future-enhancements)



## 📖 Overview

The **Universal Review Scraper** project enables users to scrape product reviews from any eCommerce website by simply entering the product URL. It dynamically extracts reviews, ratings, and reviewer details using Puppeteer and displays them on a user-friendly frontend.

### Objectives:
- ✅ Extract reviews dynamically from any product page.
- ✅ Display results in a formatted and clean frontend.
- ✅ Provide customizable scraping with optional CSS selectors.



## ✨ Features
- 🌐 **Universal Support**: Works with multiple eCommerce platforms (Amazon, Flipkart, etc.).
- 🖥 **Frontend Interface**: Simple and attractive UI for users to input URLs and view results.
- 🤖 **Dynamic Scraping**: Extracts reviews, ratings, and reviewer information using Puppeteer.
- 📦 **Customizable Selectors**: Users can provide CSS selectors for specific websites.



## 🛠 Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript
- **Web Scraping**: Puppeteer with Stealth Plugin



## ⚙️ Installation

### Clone the Repository:
```bash
    git clone https://github.com/RachnaRamesh/Go-Marble-Assignment.git
    cd Go-Marble-Assignment/nodejs-webscraper
```
### Install the required dependencies:
```bash
npm install
```
### Start the server:
```bash
npm start
```


## 🚀 **Usage**

1. Open the project in your browser at `http://localhost:3000`.
2. Enter a valid eCommerce product page URL (e.g., Amazon, Flipkart, Shopify, etc.).
3. (Optional) Add custom CSS selectors to extract specific review elements.
4. Click **"Scrape Reviews"** to get the results.



## 📊 **Project Workflow**

1. **User Input**:
   - Users enter the product URL and optionally provide CSS selectors.
2. **Backend API**:
   - The `/api/reviews` endpoint processes the request.
3. **Web Scraping**:
   - Puppeteer navigates to the page, scrolls, and extracts reviews.
4. **Data Processing**:
   - Extracted data is formatted as JSON.
5. **Results Display**:
   - Reviews are displayed dynamically on the frontend.



### **System Architecture**
![WhatsApp Image 2025-01-16 at 23 50 52_27d427b7](https://github.com/user-attachments/assets/c15d8ebb-3be4-49a7-8ed4-8e5b19220312)



#### Detailed Workflow:
![WhatsApp Image 2025-01-16 at 23 54 11_96e72ede](https://github.com/user-attachments/assets/5bf3fd27-85d8-4a15-a4e8-7b44c3e713f7)



## 🤝 **Contributors**

- [Rachna Ramesh](https://github.com/RachnaRamesh)



## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 🛡️ **Future Enhancements**

- 🚀 Extend support to additional eCommerce platforms (Myntra, Nykaa).
- 🔍 Add advanced filtering for reviews (e.g., keyword search, sentiment analysis).
- 🌐 Enable scraping of multilingual reviews.
- ⏱️ Introduce scheduled scraping to track reviews over time.

