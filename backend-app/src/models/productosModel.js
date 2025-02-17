import database from "../database/database.js";

// Obtener todos los productos con su categoría
export const obtenerProductos = async () => {
    const query = `
      SELECT p.id_producto, p.nombre, p.precio, p.descripcion, c.nombre_categoria
      FROM PRODUCTOS p
      JOIN CATEGORIAS c ON p.id_categoria = c.id_categoria
    `;
    return database(query);
  };
  
  // Obtener un producto por ID
  export const obtenerProductoPorId = async (id_producto) => {
    const query = "SELECT * FROM PRODUCTOS WHERE id_producto = $1";
    const result = await database(query, [id_producto]);
  
    return result.length ? result[0] : null;
  };
  
  // Agregar un nuevo producto
  export const agregarProducto = async (nombre, precio, descripcion, id_categoria) => {
    const query = `
      INSERT INTO PRODUCTOS (nombre, precio, descripcion, id_categoria)
      VALUES ($1, $2, $3, $4) RETURNING *
    `;
    return database(query, [nombre, precio, descripcion, id_categoria]);
  };