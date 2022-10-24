const productService = require('../services/productService');

const findAll = async (_req, res) => {
  const result = await productService.findAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.findById(id);
    if (!product) {
      return res.status(404)
        .json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = {
  findAll,
  findById,
};
