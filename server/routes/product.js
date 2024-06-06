const express = require('express')

const router = express.Router()

const Product = require('../models/product')

router.get('/getallproducts', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/addproduct', async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const product = await newProduct.save()
        res.send('Product Added Successfully')
    } catch (error) { console.log(error) }
})

module.exports = router