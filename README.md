
# Amazon Product Scraper

A simple Amazon product scraper using Node.js, Express.js and Puppeteer.

# Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running the following command.

```
npm install
```

# Usage

1. To scrape details of a product, run the following command in terminal.

```
npm start or node index.js
```
By default, the script scrapes details(screenshot and html content) for a hardcoded product "iphone15" when line  42 & 43 are uncommented. 
To scrape details for a different product, modify the productName in the `index.js` file at line 42.


2. To scrape details of a product via API call, run the following command in terminal and then open browser with the below URL.

```
npm startAPI or node app.js
```
URL: http://localhost:1000/scrape?product=bottle
Replace 'bottle' with desired productName.

3. We can also use the PostMan to make API calls with GET method at below URL:
URL: http://localhost:1000/scrape
Params: 
        Key: product 
        Value: productName



# Output

- Screenshots of the product pages are saved in the "productName" folder with file name as productName.png.
- HTML content of the product pages is saved in the "productName" folder with file name as productName.html.

# Tech Stack Used

- Node.js
- Express.js
- Puppeteer

