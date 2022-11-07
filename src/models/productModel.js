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

const prodUpdate = async ({ name, id }) => { 
  const [data] = await connect
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?;', [name, id]);
  return data;
};

const prodRemove = async (id) => {
  const [data] = await connect.execute('DELETE FROM StoreManager.products WHERE id = ?;', [id]);
  return data;
};

const prodSearch = async (q) => { 
  const [data] = await connect.execute(
    'SELECT * FROM StoreManager.products WHERE name LIKE ?;',
    [`%${q}%`],
  );
    return data;
};

module.exports = {
  findAll,
  findById,
  prodSearch,
  create,
  prodUpdate,
  prodRemove,
};
