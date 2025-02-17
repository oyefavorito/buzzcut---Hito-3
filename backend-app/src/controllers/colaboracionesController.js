import {
  crearColaboracionModel,
  obtenerColaboracionesPorUsuarioModel,
  obtenerColaboracionesPublicasModel,
  obtenerColaboracionPorIdModel
} from "../models/colaboracionesModel.js";

// Agregar una nueva colaboración asociada al usuario autenticado
export const crearColaboracionController = async (req, res) => {
  const { img_url, nombre, precio, descripcion } = req.body;
  const id_usuario = req.usuario.id; // Se obtiene del token

  if (!img_url || !nombre || !precio || !descripcion) {
    return res
      .status(400)
      .json({ mensaje: "Todos los campos son obligatorios" });
  }

  try {
    const nuevaColaboracion = await crearColaboracionModel(
      img_url,
      nombre,
      precio,
      descripcion,
      4,
      id_usuario
    );
    res.status(201).json(nuevaColaboracion);
  } catch (error) {
    console.error("❌ Error al crear colaboración:", error);
    res.status(500).json({ mensaje: "Error al crear colaboración", error });
  }
};

// Listar las colaboraciones del usuario autenticado
export const listarMisColaboracionesController = async (req, res) => {
  const id_usuario = req.usuario.id;

  try {
    const colaboraciones = await obtenerColaboracionesPorUsuarioModel(
      id_usuario
    );
    res.json({ colaboraciones });
  } catch (error) {
    console.error("❌ Error al obtener colaboraciones:", error);
    res.status(500).json({ mensaje: "Error al obtener colaboraciones", error });
  }
};

// Controlador para listar colaboraciones públicas
export const listarColaboracionesPublicasController = async (req, res) => {
  try {
    const colaboraciones = await obtenerColaboracionesPublicasModel();
    res.json({ colaboraciones });
  } catch (error) {
    console.error("❌ Error al obtener colaboraciones públicas:", error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener colaboraciones públicas" });
  }
};

// Obtener una colaboración específica por ID
export const obtenerColaboracionPorIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const colaboracion = await obtenerColaboracionPorIdModel(id);
    if (!colaboracion) {
      return res.status(404).json({ mensaje: "Colaboración no encontrada" });
    }
    res.json(colaboracion);
  } catch (error) {
    console.error("❌ Error al obtener colaboración por ID:", error);
    res.status(500).json({ mensaje: "Error al obtener colaboración por ID" });
  }
};
