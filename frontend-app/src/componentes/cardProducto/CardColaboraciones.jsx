import "./Card.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Toastify from "toastify-js";
import IconoCarrito from "../IconoCarrito";
import { Context } from "../../contexts/CardContext";

const BASE_URL = process.env.REACT_APP_BACKEND_URL; // URL del backend desde las variables de entorno

const ColaboracionCard = () => {
  const [colaboraciones, setColaboraciones] = useState([]);
  const navigate = useNavigate();
  const { addCart } = useContext(Context);

  // Obtener colaboraciones desde el backend
  useEffect(() => {
    const obtenerColaboraciones = async () => {
      try {
        const response = await fetch(`${BASE_URL}/colaboraciones`); // Reemplazo de la URL local
        const data = await response.json();
        if (response.ok) {
          setColaboraciones(data.colaboraciones);
        } else {
          console.error("❌ Error al obtener colaboraciones:", data.mensaje);
        }
      } catch (error) {
        console.error("❌ Error al conectar con el servidor:", error);
      }
    };
    obtenerColaboraciones();
  }, []);

  // Toastify para feedback visual
  const handleAddToCart = (producto) => {
    console.log("📦 Producto agregado:", producto);

    const productoId = producto.id_producto || producto.id;
    const nuevoProducto = {
      id_producto: productoId,
      nombre: producto.nombre,
      img_url: producto.img_url,
      precio: producto.precio,
      count: 1,
    };

    addCart(nuevoProducto);

    Toastify({
      text: `Añadiste ${producto.nombre} al carrito`,
      duration: 1000,
      position: "top-right",
      style: { background: "#00b09b", color: "white" },
    }).showToast();
  };

  return (
    <Row xs={1} md={3} lg={4} className="g-3 mb-3" id="cardContenedor">
      {colaboraciones.length > 0 ? (
        colaboraciones.map((producto) => (
          <Col key={producto.id_producto || producto.id}>
            <Card id="cardCard">
              <Card.Img
                src={producto.img_url || "/default-image.jpg"} // Imagen por defecto si falta la URL
                alt={producto.nombre}
              />
              <Card.Header id="headerTarjeta">
                <span className="text-capitalize fw-bold">
                  {producto.nombre}
                </span>
              </Card.Header>
              <Card.Footer id="footerTarjeta" className="text-center">
                <Card.Text className="fw-bold mb-2">
                  ${producto.precio}
                </Card.Text>
                <Button
                  id="buttonCard"
                  onClick={() =>
                    navigate(`/colaboraciones/${producto.id_producto}`)
                  }
                >
                  Ver Más
                </Button>

                <Button
                  id="buttonCard"
                  onClick={() => handleAddToCart(producto)}
                >
                  Añadir <IconoCarrito tamaño=".9rem" color="white" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))
      ) : (
        <p>No hay colaboraciones registradas aún.</p>
      )}
    </Row>
  );
};

export default ColaboracionCard;
