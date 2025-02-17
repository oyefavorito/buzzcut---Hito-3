import {
  obtenerProductos,
  obtenerProductoPorId,
  agregarProducto,
} from "../models/productosModel.js";

// 📌 Obtener todos los productos
export const listarProductos = async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener productos", error });
  }
};

// 📌 Obtener un producto por ID
export const mostrarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await obtenerProductoPorId(id);
    if (!producto)
      return res.status(404).json({ mensaje: "Producto no encontrado" });

    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener producto", error });
  }
};

// 📌 Agregar un nuevo producto (Requiere autenticación)
export const crearProducto = async (req, res) => {
  const { nombre, precio, descripcion, id_categoria } = req.body;

  try {
    const producto = await agregarProducto(
      nombre,
      precio,
      descripcion,
      id_categoria
    );
    res.status(201).json({ mensaje: "Producto agregado con éxito", producto });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al agregar producto", error });
  }
};
