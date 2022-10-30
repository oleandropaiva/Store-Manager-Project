const connection = require('./connection');

const findAll = async () => {
  const [query] = await connection
    .execute(`SELECT sales.id AS saleId,
    sales_products.product_id AS productId,
    sales_products.quantity AS quantity,
    sales.date AS date
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id;`);
  return query;
};

const findById = async (saleId) => {
  const [query] = await connection
    .execute(`SELECT sales_products.product_id AS productId,
    sales_products.quantity, sales.date
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    WHERE sale_id = ?;`, [saleId]);
  if (!query.length) return null;
  return query;
};

module.exports = {
  findAll,
  findById,
};
