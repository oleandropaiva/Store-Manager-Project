const express = require('express');

const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', productController.findAll);

productRouter.get('/:id', productController.findById);

module.exports = productRouter;
