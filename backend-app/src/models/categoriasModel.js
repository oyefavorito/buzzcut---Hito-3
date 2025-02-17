import database from "../database/database.js";

// Obtener todas las categorías
export const obtenerCategorias = async () => {
  const query = "SELECT * FROM CATEGORIAS";
  return database(query);
};

// Obtener una categoría por ID
export const obtenerCategoriaPorId = async (id_categoria) => {
  const query = "SELECT * FROM CATEGORIAS WHERE id_categoria = $1";
  const result = await database(query, [id_categoria]);

  return result.length ? result[0] : null;
};

// Agregar una nueva categoría
export const agregarCategoria = async (nombre_categoria) => {
  const query = "INSERT INTO CATEGORIAS (nombre_categoria) VALUES ($1) RETURNING *";
  return database(query, [nombre_categoria]);
};
