const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const { body } = require('express-validator');

router.post('/login', [
  body('username').isEmail(),
  body('password').isLength({ min: 5 })
], login);

module.exports = router;
