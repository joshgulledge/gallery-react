// npm install pg
// import pg
const pg = require('pg');

// get pool from pg
const Pool = pg.Pool;

const pool = new Pool({
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
});

// set up listener on pool for troubleshooting
pool.on('connect', () => 
  console.log('Connected to the database:')
);

pool.on('error', (err) => console.log(err));

// export to use in the router
// don't do export default here
module.exports = pool;