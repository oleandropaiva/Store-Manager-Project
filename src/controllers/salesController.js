const salesService = require('../services/salesService');

const findAll = async (_req, res) => {
  const data = await salesService.findAll();
  return res.status(200).json(data);
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const itens = req.body;

    const idVald = await salesService.findById(id);
    if (!idVald) return res.status(404).json({ message: 'Sale not found' });

    const data = await salesService.update({ saleId: id }, itens);
    if (!data) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = {
  findAll,
  findById,
  update,
};