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

// import mysql from 'mysql';
// import util from 'util';

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.on('connection', (connec) => {
  console.log('DB connection established');
});

connection.on('error', (err) => {
  console.error('Database error:', err);
});

export const query = util.promisify(connection.query).bind(connection);
export default connection;
