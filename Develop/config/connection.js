const Sequelize = require('sequelize');
require('dotenv').config();

// process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW
// 'ecommerce_db', 'root', '9414821Kw!'

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port: 3306
    });

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   username: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME,
//   port: +process.env.PORT || 3306
// });

module.exports = sequelize;
