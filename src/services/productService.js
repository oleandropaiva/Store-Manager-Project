const productModel = require('../models/productModel');

const getProducts = async () => productModel.findAll();

module.exports = {
  getProducts,
};
