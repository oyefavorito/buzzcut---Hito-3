import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

// Configuración usando DATABASE_URL
const config = {
  connectionString: process.env.DATABASE_URL, // Usamos directamente la URL de conexión
  ssl: {
    rejectUnauthorized: false, // Necesario para conexiones a Railway
  },
  allowExitOnIdle: true,
};

const pool = new Pool(config);

// Manejo de consultas con pool
const database = (query, values) =>
  pool
    .query(query, values)
    .then(({ rows }) => rows)
    .catch(({ code, message }) => {
      const error = { status: false, code, message };
      throw error;
    });

// Comprobar conexión
pool
  .query("SELECT NOW()")
  .then((res) => console.log("📌 Conexión exitosa a PostgreSQL:", res.rows[0]))
  .catch((err) => console.error("❌ Error conectando a PostgreSQL:", err));

export default database;
