const salesModel = require('../models/salesModel');

const findAll = async () => salesModel.findAll();

const findById = async (id) => salesModel.findById(id);

module.exports = {
  findAll,
  findById,
};
