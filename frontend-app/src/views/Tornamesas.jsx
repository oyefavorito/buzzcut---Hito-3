import TornamesasCard from "../componentes/cardProducto/CardTornamesas.jsx";

import "./Views.css";

const Tornamesas = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>TORNAMESAS</strong>
          </p>
        </div>
      </header>

      {/*POOL DE PRODUCTOS*/}
      <TornamesasCard filterCategory="Tornamesas" />
    </>
  );
};

export default Tornamesas;
