const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_manager', 'your_db_username', 'your_db_password', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
      enableArithAbort: true
    }
  }
});

const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = {
  sequelize,
  testDatabaseConnection,
};
