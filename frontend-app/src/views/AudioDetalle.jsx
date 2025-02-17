import Footer from "../componentes/footer/Footer.jsx";
import ProductoDetalle from "../componentes/productoDetalle/ProductoDetalle.jsx";

import "./Views.css";

const AudioDetalle = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>AUDIO</strong>
          </p>
        </div>
      </header>

      {/*POOL DE PRODUCTOS*/}
      <ProductoDetalle />

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default AudioDetalle;
