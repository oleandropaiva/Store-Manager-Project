const express = require('express');
const { idProduct, product } = require('../middlewares/validSale');

const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.get('/', salesController.findAll);

salesRouter.get('/:id', salesController.findById);

salesRouter.put('/:id', idProduct, product, salesController.update);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;
