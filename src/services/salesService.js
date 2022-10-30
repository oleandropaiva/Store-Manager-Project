const salesModel = require('../models/salesModel');
const productModel = require('../models/productModel');

const findAll = async () => salesModel.findAll();

const findById = async (id) => salesModel.findById(id);

const update = async (saleId, itemsUpdated) => {
  const validSales = await salesModel.findById(saleId);
  if (!validSales) return false;

  const products = await productModel.findAll();

  const validProducts = itemsUpdated.every((item) =>
    products.some((product) => item.productId === product.id));
  if (validProducts === false) return false;

  const data = await salesModel.update(saleId, itemsUpdated);
  if (data.affectedRows === 0) return false;
  return true;
};

module.exports = {
  findAll,
  findById,
  update,
};
