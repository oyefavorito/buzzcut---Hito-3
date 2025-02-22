import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

// Configuración de conexión según el entorno
const isProduction = process.env.NODE_ENV === "production";

const config = isProduction
  ? {
      connectionString: process.env.DATABASE_URL, // Usamos directamente la URL en producción
      ssl: { rejectUnauthorized: false }, // Necesario para Railway y Render
    }
  : {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    };

const pool = new Pool(config);

// Manejo de consultas con pool
const database = (query, values) =>
  pool
    .query(query, values)
    .then(({ rows }) => rows)
    .catch(({ code, message }) => {
      console.error("❌ Error en consulta SQL:", { code, message });
      throw { status: false, code, message };
    });

// Comprobar conexión
pool
  .query("SELECT NOW()")
  .then((res) => console.log("📌 Conexión exitosa a PostgreSQL:", res.rows[0]))
  .catch((err) => console.error("❌ Error conectando a PostgreSQL:", err));

export default database;
