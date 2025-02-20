import "./Card.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // URL del backend desde las variables de entorno

const CardMisColaboraciones = () => {
  const [colaboraciones, setColaboraciones] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerColaboraciones = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          `${BASE_URL}/usuarios/mis-colaboraciones`, // Reemplazo de la URL local
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setColaboraciones(data.colaboraciones);
        } else {
          setError(data.mensaje || "Error al obtener colaboraciones");
        }
      } catch (error) {
        setError("Error al conectar con el servidor");
      }
    };

    obtenerColaboraciones();
  }, []);

  return (
    <Row xs={1} md={3} lg={4} className="g-3 mb-3" id="cardContenedor">
      {colaboraciones.length > 0 ? (
        colaboraciones.map((producto, index) => (
          <Col key={`colaboracion-${producto.id_producto || index}`}>
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
        <p>{error || "No hay colaboraciones registradas aún."}</p>
      )}
    </Row>
  );
};

export default CardMisColaboraciones;
