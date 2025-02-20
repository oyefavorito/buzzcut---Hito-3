import "./ProductoDetalle.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Toastify from "toastify-js";
import IconoCarrito from "../IconoCarrito";
import { Context } from "../../contexts/CardContext";

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // URL del backend desde las variables de entorno

const ColaboracionDetalle = () => {
  const { id } = useParams();
  const { addCart, monedaLocal } = useContext(Context);
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");

  // Obtener el producto desde el backend
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const response = await fetch(`${BASE_URL}/colaboraciones/${id}`); // Reemplazo de la URL local
        const data = await response.json();
        if (response.ok) {
          setProducto(data);
        } else {
          setError(data.mensaje || "Producto no encontrado");
        }
      } catch (error) {
        console.error("❌ Error al obtener el producto:", error);
        setError("Error al conectar con el servidor");
      }
    };

    obtenerProducto();
  }, [id]);

  if (!producto) {
    return <p>{error || "Cargando producto..."}</p>;
  }

  const handleAddToCart = () => {
    addCart(producto);

    Toastify({
      text: `Añadiste ${producto.nombre} al carrito`,
      duration: 1000,
      position: "top-right",
      style: { background: "#00b09b", color: "white" },
    }).showToast();
  };

  return (
    <Container id="containerDetalle">
      <Card id="cardDetalle">
        <Card.Img
          src={producto.img_url}
          alt={producto.nombre}
          id="cardImgDetalle"
        />
        <div id="contenedorTextosDetalle">
          <Card.Header id="headerDetalle">
            <h3>{producto.nombre}</h3>
          </Card.Header>
          <Card.Body id="cardBodyDetalle">
            <p>{producto.descripcion}</p>
            <p>
              <strong>Categoría:</strong> {producto.id_categoria}
            </p>
          </Card.Body>
          <Card.Footer id="footerTarjetaDetalle">
            <Card.Text className="fw-bold mb-2">
              {monedaLocal(producto.precio)}
            </Card.Text>
            <Button onClick={handleAddToCart} id="buttonDetalle">
              Añadir <IconoCarrito tamaño=".9rem" color="white" />
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </Container>
  );
};

export default ColaboracionDetalle;
