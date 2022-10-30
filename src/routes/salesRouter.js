const express = require('express');

const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.get('/', salesController.findAll);

salesRouter.get('/:id', salesController.findById);

// salesRouter.post('/products', salesController.create);

module.exports = salesRouter;
