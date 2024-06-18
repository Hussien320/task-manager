const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { testDatabaseConnection } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test database connection
testDatabaseConnection();

// Define your routes here
// For example: app.use('/api/users', require('./routes/users'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
