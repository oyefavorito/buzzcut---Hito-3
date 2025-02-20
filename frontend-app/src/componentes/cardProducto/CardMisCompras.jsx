import "./Card.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

const BASE_URL = process.env.REACT_APP_BACKEND_URL; // URL del backend desde las variables de entorno

const CardMisCompras = () => {
  const [compras, setCompras] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const obtenerCompras = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setMensaje("No estás autenticado.");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/usuarios/mis-compras`, { // Reemplazo de la URL local
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) {
          setCompras(data.compras);
        } else {
          setMensaje(data.mensaje || "No se pudieron cargar las compras.");
        }
      } catch (error) {
        console.error("❌ Error al obtener las compras:", error);
        setMensaje("Error de conexión con el servidor.");
      }
    };

    obtenerCompras();
  }, []);

  if (mensaje) return <p>{mensaje}</p>;

  return (
    <Row xs={1} md={3} lg={4} className="g-3 mb-3" id="cardContenedor">
      {compras.length > 0 ? (
        compras.map((producto, index) => (
          <Col key={`compra-${producto.id_producto || index}`}>
            <Card id="cardCard">
              <Card.Img
                src={producto.img_url || "/default-image.jpg"} // Imagen por defecto si no tiene URL
                alt={producto.nombre}
              />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>${producto.precio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No hay compras registradas aún.</p>
      )}
    </Row>
  );
};

export default CardMisCompras;
