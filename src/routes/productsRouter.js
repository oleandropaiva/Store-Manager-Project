const express = require('express');

const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/products', productController.findAll);

productRouter.get('/products/:id', productController.findById);

productRouter.post('/products', productController.create);

module.exports = productRouter;
