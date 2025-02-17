import Footer from "../componentes/footer/Footer.jsx";
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

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default Tornamesas;
