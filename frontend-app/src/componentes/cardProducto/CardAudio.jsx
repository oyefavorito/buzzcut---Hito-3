import "./Card.css";
import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Context } from "../../contexts/CardContext";
import { useNavigate } from "react-router-dom";

import Toastify from "toastify-js";

import IconoCarrito from "../IconoCarrito";

const AudioCard = ({ filterCategory }) => {
  const { cardItems, addCart, monedaLocal } = useContext(Context); // Contexto
  const navigate = useNavigate(); // Hook de navegación

  if (!cardItems || cardItems.length === 0) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  } // Fallback mientras se cargan los datos

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

  // Filtrar productos según la categoría proporcionada
  const filteredItems = filterCategory
    ? cardItems.filter((producto) => producto.categoria === filterCategory)
    : cardItems;

  return (
    <Row xs={1} md={3} lg={4} className="g-3 mb-3" id="cardContenedor">
      {filteredItems.map((producto) => (
        <Col key={producto.id}>
          <Card id="cardCard">
            <Card.Img src={producto.img} alt={producto.nombre} />
            <Card.Header id="headerTarjeta">
              <span className="text-capitalize fw-bold">{producto.nombre}</span>
            </Card.Header>
            <Card.Footer id="footerTarjeta" className="text-center">
              <Card.Text className="fw-bold mb-2">
                {monedaLocal(producto.precio)}
              </Card.Text>
              <Button
                id="buttonCard"
                onClick={() =>
                  navigate(
                    `/${producto.categoria.toLowerCase()}/${producto.id}`
                  )
                }
              >
                Ver Más
              </Button>

              <Button id="buttonCard" onClick={() => handleAddToCart(producto)}>
                Añadir <IconoCarrito tamaño=".9rem" color="white" />{" "}
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AudioCard;
