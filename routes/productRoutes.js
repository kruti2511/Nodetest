const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const authenticate = require('../middleware/authenticate');

router.get('/products', authenticate, getProducts);

module.exports = router;
