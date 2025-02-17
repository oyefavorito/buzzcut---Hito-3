import {
  crearUsuario,
  obtenerUsuarioPorCorreo,
  obtenerUsuarioPorId,
} from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import database from "../database/database.js";

const JWT_SECRET = process.env.JWT_SECRET;

// Registrar Usuario
export const registrarUsuario = async (req, res) => {
  console.log("📌 Recibida solicitud de registro:", req.body); // Verifica si llega la petición
  try {
    const usuario = await crearUsuario(
      req.body.nombre_apellido,
      req.body.correo,
      req.body.clave,
      req.body.telefono,
      req.body.direccion,
      req.body.ciudad
    );
    res.status(201).json({ mensaje: "Usuario registrado", usuario });
  } catch (error) {
    console.error("❌ Error en registro:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

// Iniciar Sesión (Genera JWT)
export const loginUsuario = async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const usuario = await obtenerUsuarioPorCorreo(correo);
    if (!usuario)
      return res.status(401).json({ mensaje: "Credenciales inválidas" });

    const validPassword = await bcrypt.compare(clave, usuario.clave);
    if (!validPassword)
      return res.status(401).json({ mensaje: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: usuario.id_usuario, correo: usuario.correo },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ mensaje: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

// Obtener Perfil del Usuario (Ruta Protegida)
export const obtenerPerfil = async (req, res) => {
  try {
    const usuario = await obtenerUsuarioPorId(req.usuario.id);
    res.json({ perfil: usuario });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener perfil", error });
  }
};

export const obtenerComprasUsuario = async (req, res) => {
  const userId = req.usuario.id;

  try {
    const query = `
      SELECT p.id_producto, p.nombre, p.img_url, p.precio
      FROM COMPRAS_PRODUCTOS cp
      INNER JOIN PRODUCTOS p ON cp.id_producto = p.id_producto
      INNER JOIN COMPRAS c ON cp.id_compra = c.id_compra
      WHERE c.id_usuario = $1
    `;

    const result = await database(query, [userId]); // ✅ Usamos database en vez de pool.query

    if (result.length === 0) {
      return res
        .status(404)
        .json({ mensaje: "No se encontraron compras para este usuario" });
    }

    res.json({ compras: result });
  } catch (error) {
    console.error("❌ Error al obtener las compras:", error);
    res.status(500).json({ mensaje: "Error al obtener las compras", error });
  }
};

export const obtenerColaboracionesUsuario = async (req, res) => {
  const userId = req.usuario.id;

  try {
    const query = `
      SELECT c.id_colaboracion, p.nombre, p.img_url, p.precio
      FROM COLABORACIONES c
      JOIN PRODUCTOS p ON c.id_producto = p.id_producto
      WHERE c.id_usuario = $1
    `;

    const colaboraciones = await database(query, [userId]);

    if (colaboraciones.length === 0) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontraron colaboraciones para este usuario",
        });
    }

    res.json({ colaboraciones });
  } catch (error) {
    console.error("❌ Error al obtener las colaboraciones:", error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener las colaboraciones", error });
  }
};
