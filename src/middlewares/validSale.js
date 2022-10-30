const idProduct = (req, res, next) => {
  const valid = req.body;

  if (valid.some((item) => item.productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const product = (req, res, next) => {
  const valid = req.body;

  if (valid.some((item) => item.quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (valid.some((item) => item.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = { idProduct, product };