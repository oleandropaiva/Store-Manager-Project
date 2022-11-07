const productService = require('../services/productService');

const ERROR_MSG = { message: 'internal server error' };
const NOT_FOUND = { message: 'Product not found' };

const findAll = async (_req, res) => {
  const data = await productService.findAll();
  return res.status(200).json(data);
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.findById(id);
    if (!product) {
      return res.status(404).json(NOT_FOUND);
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(ERROR_MSG);
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await productService.create(name);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json(ERROR_MSG);
  }
};

const prodUpdate = async (req, res) => { 
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await productService.prodUpdate({ name, id });
    if (!data) {
      return res.status(404).json(NOT_FOUND);
    }
    return res.status(200).json({ id: Number(id), name });
  } catch (error) {
    return res.status(500).json(ERROR_MSG);
  }
};

const prodRemove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.prodRemove(id);
    if (!data) {
      return res.status(404).json(NOT_FOUND);
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(ERROR_MSG);
  }
};

const prodSearch = async (req, res) => {  
  try {
    const { q } = req.query;
    const data = await productService.prodSearch(q);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  findAll,
  findById,
  create,
  prodRemove,
  prodUpdate,
  prodSearch,
};
