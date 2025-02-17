import {
  obtenerCompras,
  obtenerCompraPorId,
  agregarCompra,
} from "../models/compraModel.js";

// 📌 Obtener todas las compras
export const listarCompras = async (req, res) => {
  try {
    const compras = await obtenerCompras();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener compras", error });
  }
};

// 📌 Obtener una compra por ID
export const mostrarCompra = async (req, res) => {
  const { id } = req.params;

  try {
    const compra = await obtenerCompraPorId(id);
    if (!compra)
      return res.status(404).json({ mensaje: "Compra no encontrada" });

    res.json(compra);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener compra", error });
  }
};

// 📌 Crear una nueva compra
export const crearCompra = async (req, res) => {
  const { id_usuario } = req.body;

  try {
    const compra = await agregarCompra(id_usuario);
    res.status(201).json({ mensaje: "Compra realizada con éxito", compra });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar la compra", error });
  }
};
