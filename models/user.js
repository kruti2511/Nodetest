const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.ENUM('admin', 'user')
});

module.exports = User;
