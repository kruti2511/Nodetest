const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const products = await Product.findAll({
    attributes: ['name', 'description', 'price', 'availability'],
    limit,
    offset
  });
  res.json(products);
};
