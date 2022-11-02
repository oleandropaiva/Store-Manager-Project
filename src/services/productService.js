const productModel = require('../models/productModel');

const findAll = async () => productModel.findAll();

const findById = async (id) => productModel.findById(id);

const create = async (name) => productModel.create(name);

const prodRemove = async (id) => {
  const data = await productModel.prodRemove(id);
  if (data.affectedRows === 0) { return false; }
  return true;
};

module.exports = {
  findAll,
  findById,
  create,
  prodRemove,
};
