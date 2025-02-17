import "./ProductoDetalle.css";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/CardContext";
import { Container, Card, Button } from "react-bootstrap";

import Toastify from "toastify-js";

import IconoCarrito from "../IconoCarrito";

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const { cardItems, addCart, monedaLocal } = useContext(Context); // Obtener los productos desde el contexto
  const navigate = useNavigate(); // Hook de navegación

  // Buscar el producto específico por ID
  const producto = cardItems.find((item) => item.id === id);

  if (!producto) {
    return <p>Producto no encontrado...</p>; // Mensaje si no existe el producto
  }

  {
    /*TODA LA LÓGICA DE TOSASTIFY*/
  }

  const handleAddToCart = (producto) => {
    addCart(producto);

    Toastify({
      text: `Añadiste ${producto.nombre} al carrito`,
      duration: 1000,
      position: "top-right",
      positionLeft: false,
      style: {
        background: "#00b09b", // Cambia a tu color deseado
        color: "white",
      },
    }).showToast();
  };

  return (
    <Container id="containerDetalle">
      <Card id="cardDetalle">
        <Card.Img
          src={producto.img}
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
              <strong>Categoría:</strong> {producto.categoria}
            </p>
          </Card.Body>
          <Card.Footer id="footerTarjetaDetalle">
            <Card.Text className="fw-bold mb-2">
              {monedaLocal(producto.precio)}
            </Card.Text>

            <Button
              onClick={() => handleAddToCart(producto)}
              id="buttonDetalle"
            >
              Añadir <IconoCarrito tamaño=".9rem" color="white" />{" "}
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </Container>
  );
};

export default ProductoDetalle;
