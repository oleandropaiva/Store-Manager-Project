const salesModel = require('../models/salesModel');
const productModel = require('../models/productModel');

const findAll = async () => salesModel.findAll();

const findById = async (id) => salesModel.findById(id);

const update = async (itemsUpdated) => {
  const products = await productModel.findAll();

  const validProducts = itemsUpdated.every((item) =>
    products.some((product) => item.productId === product.id));
  if (validProducts === false) return false;
  const data = await salesModel.update(itemsUpdated);
  return data;
};

const deleteSale = async (id) => {
  const data = await salesModel.deleteSale(id);
  if (data.affectedRows === 0) return false;
  return true;
};

module.exports = {
  findAll,
  findById,
  update,
  deleteSale,
};
