const {Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()
const sequelize = new Sequelize({

  database:process.env.DB_DATABASE,
  username:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
      dialect:process.env.DB_DIALECT,
      port:process.env.DB_PORT,
      host:process.env.DB_HOST


}); Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
});

module.exports=Task;