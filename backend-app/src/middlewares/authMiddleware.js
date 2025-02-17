import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const verificarToken = (req, res, next) => {
  // Verificar encabezado en minúsculas o mayúsculas
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ mensaje: "Acceso denegado. Token no proporcionado" });
  }

  // Verificar si el token tiene el formato "Bearer <token>"
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  if (!token) {
    return res.status(400).json({ mensaje: "Token no válido o malformado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    console.error("❌ Error al verificar token:", error.message);
    res.status(403).json({ mensaje: "Token inválido o expirado" });
  }
};
