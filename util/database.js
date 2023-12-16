const Sequelize = require('sequelize');


const sequelize = new Sequelize('expensetrack','root','uitIT$1822',{
    dialect: 'mysql',
    host: 'localhost'
    
   });


// Rest of your Sequelize setup and model definitions go here

module.exports = sequelize;
