import database from "../database/database.js";

// Obtener todas las compras con usuario
export const obtenerCompras = async () => {
  const query = `
    SELECT co.id_compra, u.nombre_apellido, co.fecha_compra
    FROM COMPRAS co
    JOIN USUARIOS u ON co.id_usuario = u.id_usuario
  `;
  return database(query);
};

// Obtener una compra por ID
export const obtenerCompraPorId = async (id_compra) => {
  const query = `
    SELECT co.id_compra, u.nombre_apellido, co.fecha_compra
    FROM COMPRAS co
    JOIN USUARIOS u ON co.id_usuario = u.id_usuario
    WHERE co.id_compra = $1
  `;
  const result = await database(query, [id_compra]);

  return result.length ? result[0] : null;
};

// Agregar una nueva compra
export const agregarCompra = async (id_usuario) => {
  const query = "INSERT INTO COMPRAS (id_usuario) VALUES ($1) RETURNING *";
  return database(query, [id_usuario]);
};
