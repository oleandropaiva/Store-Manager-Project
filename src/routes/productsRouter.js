const express = require('express');

const productController = require('../controllers/productController');
const { productValid } = require('../middlewares/productValid');

const productRouter = express.Router();

productRouter.get('/', productController.findAll);

productRouter.get('/:id', productController.findById);

productRouter.post('/', productValid, productController.create);

module.exports = productRouter;
