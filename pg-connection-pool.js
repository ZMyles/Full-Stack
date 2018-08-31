"use strict";

const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "Lionborn12",
  host: "localhost",
  port: 5432,
  database: "ExpressShobDB",
  ssl: false
});

module.exports = pool;