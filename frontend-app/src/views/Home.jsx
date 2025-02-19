import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../contexts/CardContext";

import ControlledCarousel from "../componentes/carousel/Carousel.jsx";
import TornamesasCard from "../componentes/cardProducto/CardTornamesas.jsx";
import ViniloCard from "../componentes/cardProducto/CardVinilos.jsx";
import AudioCard from "../componentes/cardProducto/CardAudio.jsx";

import "./Views.css";

import Toastify from "toastify-js";

const Home = () => {
  const { cardItems, addCart, monedaLocal } = useContext(Context);
  const navigate = useNavigate();

  const [color, setColor] = useState("white");

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
    <>
      <ControlledCarousel />
      <div id="contenerTextoHome">
        <div id="fondoTextoHome">
          <p id="tituloHome">
            <strong>TORNAMESAS</strong>
          </p>
        </div>
      </div>
      <TornamesasCard filterCategory="Tornamesas" />
      <div id="contenerTextoHome">
        <div id="fondoTextoHome">
          <p id="tituloHome">
            <strong>VINILOS</strong>
          </p>
        </div>
      </div>
      <div>
        <ViniloCard filterCategory="Vinilos" />
        <div id="contenerTextoHome">
          <div id="fondoTextoHome">
            <p id="tituloHome">
              <strong>AUDIO</strong>
            </p>
          </div>
        </div>
      </div>
      <AudioCard filterCategory="Audio" />
    </>
  );
};

export default Home;
