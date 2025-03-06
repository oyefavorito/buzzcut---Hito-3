import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuariosRoutes from "./src/routes/usuariosRoutes.js";
import comprasRoutes from "./src/routes/comprasRoutes.js";
import colaboracionesRoutes from "./src/routes/colaboracionesRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const ALLOWED_ORIGINS = [
  "https://sensational-biscotti-5f8579.netlify.app",
  "https://buzzcut-backend-app.onrender.com",
];

// Función de validación de origen para CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();

// Habilita CORS con opciones avanzadas
app.use(cors(corsOptions));

// Middleware para manejar solicitudes preflight de CORS
app.options("*", cors(corsOptions));

// Habilita JSON en las solicitudes
app.use(express.json());

// Habilita rutas
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
