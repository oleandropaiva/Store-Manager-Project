const express = require('express');
const { idProduct, product } = require('../middlewares/validSale');

const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.get('/', salesController.findAll);

salesRouter.post('/:id', idProduct, product, salesController.update);

salesRouter.get('/:id', salesController.findById);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;
