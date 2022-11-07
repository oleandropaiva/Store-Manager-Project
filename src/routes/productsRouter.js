const express = require('express');

const productController = require('../controllers/productController');

const { productValid } = require('../middlewares/productValid');

const productRouter = express.Router();

productRouter.get('/', productController.findAll);

productRouter.get('/:id', productController.findById);

productRouter.delete('/:id', productController.prodRemove);

productRouter.post('/', productValid, productController.create);

productRouter.put('/:id', productValid, productController.edit);

module.exports = productRouter;
