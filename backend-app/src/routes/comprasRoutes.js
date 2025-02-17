import express from "express";
import {
  listarCompras,
  mostrarCompra,
  crearCompra,
} from "../controllers/comprasController.js";

import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", listarCompras);
router.get("/:id", mostrarCompra);
router.post("/", verificarToken, crearCompra);

export default router;
