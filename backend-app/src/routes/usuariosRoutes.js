import express from "express";
import {
  registrarUsuario,
  loginUsuario,
  obtenerPerfil,
  obtenerComprasUsuario,
  obtenerColaboracionesUsuario,
} from "../controllers/usuariosController.js";

import { validarRegistro } from "../middlewares/validarMiddleware.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", validarRegistro, registrarUsuario);
router.post("/login", loginUsuario);
router.get("/miperfil", verificarToken, obtenerPerfil);
router.get("/mis-compras", verificarToken, obtenerComprasUsuario); // usuario + compras el particular
router.get("/mis-colaboraciones", verificarToken, obtenerColaboracionesUsuario); // usuario + colaboraciones


export default router;
