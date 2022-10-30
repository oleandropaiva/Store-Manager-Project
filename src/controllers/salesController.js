const salesService = require('../services/salesService');

const findAll = async (_req, res) => {
  const result = await salesService.findAll();
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesService.findById(id);
    if (!sales) {
      return res.status(404)
        .json({ message: 'Sale not found' });
    }
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = {
  findAll,
  findById,
};
