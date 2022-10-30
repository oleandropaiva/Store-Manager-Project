const express = require('express');

const productController = require('../controllers/productController');
const { productValid } = require('../middlewares/productValid');

const productRouter = express.Router();

productRouter.get('/products', productController.findAll);

productRouter.get('/products/:id', productController.findById);

productRouter.post('/products', productValid, productController.create);

module.exports = productRouter;
