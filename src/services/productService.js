const productModel = require('../models/productModel');

const findAll = async () => productModel.findAll();

const findById = async (id) => productModel.findById(id);

const create = async (name) => productModel.create(name);

module.exports = {
  findAll,
  findById,
  create,
};
