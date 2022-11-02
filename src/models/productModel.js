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

const create = async (name) => {
  const [data] = await
    connect.execute('INSERT INTO StoreManager.products (name) VALUES (?);', [name]);
  return { id: data.insertId, name };
};

const prodRemove = async (id) => {
  const [data] = await connect.execute('DELETE FROM products WHERE id = ?;', [id]);
  return data.affectedRows;
};

module.exports = {
  findAll,
  findById,
  create,
  prodRemove,
};
