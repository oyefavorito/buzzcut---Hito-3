import express from "express";
import {
  crearColaboracionController,
  listarMisColaboracionesController,
  listarColaboracionesPublicasController,
  obtenerColaboracionPorIdController
} from "../controllers/colaboracionesController.js";

import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rutas protegidas
router.post("/colaborar", verificarToken, crearColaboracionController);
router.get("/mis-colaboraciones", verificarToken, listarMisColaboracionesController);

// Rutas públicas
router.get("/", listarColaboracionesPublicasController);
router.get("/:id", obtenerColaboracionPorIdController);

export default router;
