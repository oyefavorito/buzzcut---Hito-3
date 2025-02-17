import database from "../database/database.js";

// Agregar una nueva colaboración y asociarla al usuario
export const crearColaboracionModel = async (
  img_url,
  nombre,
  precio,
  descripcion,
  id_categoria,
  id_usuario
) => {
  try {
    // Insertar el nuevo producto
    const producto = await database(
      `
      INSERT INTO PRODUCTOS (img_url, nombre, precio, descripcion, id_categoria)
      VALUES ($1, $2, $3, $4, $5) RETURNING id_producto
    `,
      [img_url, nombre, precio, descripcion, id_categoria]
    );

    const id_producto = producto[0].id_producto;

    // Asociar el producto al usuario en la tabla COLABORACIONES
    await database(
      `
      INSERT INTO COLABORACIONES (id_usuario, id_producto)
      VALUES ($1, $2)
    `,
      [id_usuario, id_producto]
    );

    return { id_producto, mensaje: "✅ Colaboración creada con éxito" };
  } catch (error) {
    throw error;
  }
};

// Obtener colaboraciones por usuario
export const obtenerColaboracionesPorUsuarioModel = async (id_usuario) => {
  const query = `
    SELECT p.id_producto, p.nombre, p.img_url, p.precio
    FROM COLABORACIONES c
    JOIN PRODUCTOS p ON c.id_producto = p.id_producto
    WHERE c.id_usuario = $1
  `;
  return await database(query, [id_usuario]);
};

export const obtenerColaboracionesPublicasModel = async () => {
  const query = `
    SELECT id_producto, nombre, img_url, precio
    FROM PRODUCTOS
    WHERE id_categoria = 4
  `;
  try {
    const colaboraciones = await database(query);
    return colaboraciones;
  } catch (error) {
    throw new Error(
      `Error al obtener colaboraciones públicas: ${error.message}`
    );
  }
};

// Obtener colaboración por ID
export const obtenerColaboracionPorIdModel = async (id) => {
  const query = `
    SELECT id_producto, nombre, img_url, precio, descripcion, id_categoria
    FROM PRODUCTOS
    WHERE id_producto = $1
  `;
  try {
    const resultado = await database(query, [id]);
    return resultado[0];
  } catch (error) {
    throw new Error(`Error al obtener colaboración por ID: ${error.message}`);
  }
};
