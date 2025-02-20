import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // URL del backend desde las variables de entorno

const Login = () => {
  const navigate = useNavigate();

  // Estados para capturar los valores del formulario
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/usuarios/login`, {
        // Reemplazo de la URL local
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, clave }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Guardar el token en localStorage
        setMensaje("✅ Inicio de sesión exitoso. Redirigiendo...");
        setTimeout(() => navigate("/miperfil"), 1000); // Redirigir después de 1 segundo
      } else {
        setMensaje(`❌ ${data.mensaje || "Error en el inicio de sesión."}`);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      setMensaje("Error en la conexión con el servidor.");
    }
  };

  return (
    <Form id="formularioLogin" onSubmit={handleSubmit}>
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

      <Button id="botonLogin" variant="primary" type="submit">
        Confirmar
      </Button>

      {mensaje && <p>{mensaje}</p>}
    </Form>
  );
};

export default Login;
