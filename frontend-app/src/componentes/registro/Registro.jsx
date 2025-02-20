import "./Registro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;; // URL del backend desde las variables de entorno

const Registro = () => {
  const navigate = useNavigate();

  const [nombreApellido, setNombreApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = {
      nombre_apellido: nombreApellido.trim(),
      correo: correo.trim(),
      clave,
      telefono: telefono.trim(),
      direccion: direccion.trim(),
      ciudad: ciudad.trim(),
    };

    try {
      const response = await fetch(`${BASE_URL}/usuarios/register`, {  // Reemplazo de la URL local
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.mensaje || "Error en el registro");
      }

      setMensaje("✅ Usuario registrado exitosamente. Redirigiendo...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("❌ Error en la solicitud:", error.message);
      setMensaje(error.message);
    }
  };

  return (
    <Form id="formularioRegistro" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre completo"
            value={nombreApellido}
            onChange={(e) => setNombreApellido(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="+5696842XXX"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Guayaquil 527 departamento 20, Comuna Santiago Centro"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Santiago"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Button id="botonRegistro" variant="primary" type="submit">
        Crear cuenta
      </Button>

      {mensaje && <p>{mensaje}</p>}
    </Form>
  );
};

export default Registro;
