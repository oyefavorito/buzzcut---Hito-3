import Footer from "../componentes/footer/Footer.jsx";
import CardAudio from "../componentes/cardProducto/CardAudio.jsx";

import "./Views.css";

const Audio = () => {
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
      <CardAudio filterCategory="Audio" />

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default Audio;
