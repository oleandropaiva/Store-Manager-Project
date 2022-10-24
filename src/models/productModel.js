const connect = require('./connection');

const findAll = async () => {
  const [data] = await
    connect.execute('SELECT * FROM StoreManager.products ORDER BY id;');
  return data;
};

const findById = async (id) => {
  const [data] = await
    connect.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return data[0];
};

module.exports = {
  findAll,
  findById,
};
