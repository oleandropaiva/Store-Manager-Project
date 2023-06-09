const salesService = require('../services/salesService');

const notFound = { message: 'Sale not found' };
const serverError = { message: 'internal server error' };

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
    return res.status(500).json(serverError);
  }
};

const update = async (req, res) => {
  try {
    const itens = req.body;
    const data = await salesService.update(itens);
    if (!data) return res.status(404).json({ message: 'Product not found' });

    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(serverError);
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await salesService.deleteSale(id);
    if (!data) {
      return res.status(404).json(notFound);
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(serverError);
  }
};
  
module.exports = {
  findAll,
  findById,
  update,
  deleteSale,
};