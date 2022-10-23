const connect = require('./connection');

// const insert = (person) => connect.execute(
//   `INSERT INTO people
//       (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
//   [person.firstName, person.lastName, person.email, person.phone],
// );

const findAll = () => connect.execute('SELEC * FROM StoreManager.products');

const findById = (id) => connect.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);

// const update = (person, id) => connect.execute(
//   `UPDATE people
//     SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
//   [person.firstName, person.lastName, person.email, person.phone, id],
// );

// const remove = (id) => connect.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  // insert,
  findAll,
  findById,
  // update,
  // remove,
};
