const express = require('express');
const scrapeAmazonProduct = require('./index');

const app = express();
const PORT = 1000;

app.get('/scrape', async (req, res) => {
    const { product } = req.query;

    if (!product) {
        return res.status(400).json({ error: 'Product name is required.' });
    }

    try {
        const result = await scrapeAmazonProduct(product);
        
        res.json({ message: result });
    } catch (error) {
        res.status(500).json(error, { error: 'Failed to scrape product.', details: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

