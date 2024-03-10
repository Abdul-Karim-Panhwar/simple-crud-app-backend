const express = require("express");
const Product = require('../models/product.model.js')
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')



// get all the products
router.get('/', getProducts);

// get a product by ID
router.get("/:id", getProduct);

// add a product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct)

// delete a product
router.delete("/:id", deleteProduct)
module.exports = router;
