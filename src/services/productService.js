const productModel = require('../models/productModel');

const findAll = async () => productModel.findAll();
const findById = async (id) => productModel.findById(id);

const create = async (name) => productModel.create(name);

const prodUpdate = async ({ name, id }) => { 
  const data = await productModel.prodUpdate({ name, id });
  if (data.affectedRows === 0) { return false; }
  return true;
};

const prodRemove = async (id) => {
  const data = await productModel.prodRemove(id);
  if (data.affectedRows === 0) { return false; }
  return true;
};

const prodSearch = async (q) => {
  if (q === '') {
    const data = await productModel.findAll();
    return data;
  }
  const data = await productModel.prodSearch(q);
  return data;
};

module.exports = {
  findAll,
  findById,
  create,
  prodUpdate,
  prodRemove,
  prodSearch,
};
