const express = require('express');

const productRouter = express.Router();

productRouter.get('/', async (_req, res) => {
  const [result] = await productController.findAll();
  res.status(200).json(result);
});

productRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await productController.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = productRouter;
