import { useContext } from "react";
import { Context } from "../contexts/CardContext";
import CarritoProductos from "../componentes/carrito/Carrito.jsx";
import "./Views.css";

const Carrito = () => {
  const { cart } = useContext(Context);
  return (
    <>
      <header>
        ¿
        <div id="contenerTextoHeader">
          <h1 id="textoHeader" className="fs-4">
            <strong>DETALLE DEL PEDIDO</strong>
          </h1>
        </div>
      </header>

      <section id="carrito">
        {cart.length === 0 ? (
          <p id="carritoVacio">Aun no añades productos al carrito.</p>
        ) : (
          <CarritoProductos />
        )}
      </section>
    </>
  );
};

export default Carrito;
