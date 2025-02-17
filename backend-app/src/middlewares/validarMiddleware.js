export const validarRegistro = (req, res, next) => {
  const { nombre_apellido, correo, clave, telefono, direccion, ciudad } =
    req.body;

  if (!nombre_apellido || !correo || !clave) {
    return res
      .status(400)
      .json({ mensaje: "Nombre, correo y clave son obligatorios" });
  }

  if (clave.length < 6) {
    return res
      .status(400)
      .json({ mensaje: "La clave debe tener al menos 6 caracteres" });
  }

  next(); // Continúa si los datos son válidos
};
