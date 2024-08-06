import "colors";
import mysql from "mysql"
import util from "util";

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return; // Exit the function early if there's an error
//   }
//   console.log('DB connection is successful'.bgCyan.white);
// });

// connection.on('error', (err) => {
//   console.error('Database error:', err);
//   // You might want to handle the error or reconnect here
// });

// export const query = util.promisify(connection.query).bind(connection);
// export default connection;


// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust based on your needs
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Promisify the query method for ease of use with async/await
pool.query = util.promisify(pool.query);

// Event listener for connection events
pool.on('connection', (connection) => {
  console.log('DB connection established');
});

// Event listener for error events
pool.on('error', (err) => {
  console.error('Database error:', err);
  // You may want to handle reconnections or other error handling here
});

// Export the pool and query method
export const query = (sql, params) => pool.query(sql, params);
export default pool;

