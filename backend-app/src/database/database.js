import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
  // ssl: true, // no sé bien si voy a utilizar esto... pero tengo que tener ojo si mi DB soporta SSL o usar `ssl: { rejectUnauthorized: false }`
};

const pool = new Pool(config);

// Manejo de consultas con `pool`
const database = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: false, code, message };
    throw error;
  });

  pool.query("SELECT NOW()")
  .then(res => console.log("📌 Conexión exitosa a PostgreSQL:", res.rows[0]))
  .catch(err => console.error("❌ Error conectando a PostgreSQL:", err));

export default database;
