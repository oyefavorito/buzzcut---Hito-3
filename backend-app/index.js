import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usuariosRoutes from "./src/routes/usuariosRoutes.js";
import comprasRoutes from "./src/routes/comprasRoutes.js";
import colaboracionesRoutes from "./src/routes/colaboracionesRoutes.js";

//import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
// habilita mi cors
app.use(cors({ origin: "http://localhost:5173" }));

// habilita mis middlewares
app.use(express.json());

// habilita mis rutas
app.use("/usuarios", usuariosRoutes);
app.use("/compras", comprasRoutes);
app.use("/colaboraciones", colaboracionesRoutes);

//app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server on  ${PORT}`);
});
