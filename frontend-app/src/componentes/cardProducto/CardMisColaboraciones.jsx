import "./Card.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

const CardMisColaboraciones = () => {
  const [colaboraciones, setColaboraciones] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerColaboraciones = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          "http://localhost:3000/usuarios/mis-colaboraciones",
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
          <Col key={producto.id_producto || index}>
            <Card id="cardCard">
              <Card.Img src={producto.img_url} alt={producto.nombre} />
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
