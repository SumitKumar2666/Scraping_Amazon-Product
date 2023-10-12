
const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeAmazonProduct(productName) {
    // Launching a new browser instance
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigating to Amazon and searching for the product
    await page.goto('https://www.amazon.in', { waitUntil: 'networkidle2' });
    await page.type('#twotabsearchtextbox', productName);
    await page.click('input.nav-input[type="submit"]');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Getting the link of the first product
    const productLink = await page.$eval('.s-result-item.s-asin .a-text-normal', el => el.href);
    await page.goto(productLink, { waitUntil: 'networkidle2' });

    // Replacing special characters with underscores in productName
    const folderName = productName.replace(/[^a-zA-Z0-9]/g, '_'); 
    
    //making directory with productName(folderName) if it does not already exists.
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName); 
    }

    // Taking screenshot of product page
    await page.screenshot({ path: `${folderName}/${productName}.png` });

    // Saving HTML content of product page
    const content = await page.content();
    fs.writeFileSync(`${folderName}/${productName}.html`, content);

    await browser.close();

    return `Data saved in folder: ${folderName}`;
}
module.exports = scrapeAmazonProduct;
async function main(){
    // Hardcoding a product name
    // await scrapeAmazonProduct('iphone15');
    // console.log('Scraping completed!');
}

main();
