import database from "../database/database.js";
import bcrypt from "bcrypt";

// Crear un nuevo usuario con contraseña encriptada
export const crearUsuario = async (
  nombre_apellido,
  correo,
  clave,
  telefono,
  direccion,
  ciudad
) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(clave, salt);

  const query = `
    INSERT INTO USUARIOS (nombre_apellido, correo, clave, telefono, direccion, ciudad)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_usuario, nombre_apellido, correo, telefono, direccion, ciudad
  `;
  const values = [
    nombre_apellido,
    correo,
    hashedPassword,
    telefono,
    direccion,
    ciudad,
  ];

  return database(query, values);
};

// Login usuario
export const obtenerUsuarioPorCorreo = async (correo) => {
  const query = "SELECT * FROM USUARIOS WHERE correo = $1";
  const result = await database(query, [correo]);

  return result.length ? result[0] : null;
};

// Usuario por ID
export const obtenerUsuarioPorId = async (id_usuario) => {
  const query =
    "SELECT id_usuario, nombre_apellido, correo, telefono, direccion, ciudad FROM USUARIOS WHERE id_usuario = $1";
  const result = await database(query, [id_usuario]);

  return result.length ? result[0] : null;
};
