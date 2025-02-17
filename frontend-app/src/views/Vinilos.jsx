import Footer from "../componentes/footer/Footer.jsx";
import CardVinilos from "../componentes/cardProducto/CardVinilos.jsx";

import "./Views.css";

const Vinilos = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>VINILOS</strong>
          </p>
        </div>
      </header>

      {/*POOL DE PRODUCTOS*/}
      <CardVinilos filterCategory="Vinilos" />

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default Vinilos;
