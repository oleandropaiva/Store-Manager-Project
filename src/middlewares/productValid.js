const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().min(5).required().messages({
    'string.min': '422|"name" length must be at least {#limit} characters long',
    'any.required': '400|"name" is required',
  }),
});

const valid = (product) => {
  const isValid = productSchema.validate(product);
  return isValid;
};

const productValid = (req, res, next) => {
  const product = { ...req.body };
  const { error } = valid(product);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = { productValid };
