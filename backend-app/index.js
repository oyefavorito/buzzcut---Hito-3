import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuariosRoutes from "./src/routes/usuariosRoutes.js";
import comprasRoutes from "./src/routes/comprasRoutes.js";
import colaboracionesRoutes from "./src/routes/colaboracionesRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL =
  process.env.FRONTEND_URL?.replace(/\/$/, "") ||
  "https://sensational-biscotti-5f8579.netlify.app";

const app = express();

// habilita mi cors
app.use(
  cors({
    origin: FRONTEND_URL, // Solo la URL limpia
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// habilita mis middlewares
app.use(express.json());

// habilita mis rutas
app.use("/usuarios", usuariosRoutes);
app.use("/compras", comprasRoutes);
app.use("/colaboraciones", colaboracionesRoutes);

// Iniciar el servidor solo si no estamos en tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
