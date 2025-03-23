/* eslint-disable no-throw-literal */
const mysql = require('mysql2/promise');
require('dotenv').config();  // Load environment variables

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,      // ✅ Use environment variable
  user: process.env.DB_USER,      // ✅ Use environment variable
  port: process.env.DB_PORT,      // ✅ Use environment variable
  password: process.env.DB_PASSWORD,  // ✅ Use environment variable
  database: process.env.DB_NAME   // ✅ Use environment variable
});

pool.getConnection()
  .then(() => console.log('✅ Connected to MySQL database successfully!'))
  .catch(err => console.error('❌ Database connection failed:', err));

module.exports = pool;
