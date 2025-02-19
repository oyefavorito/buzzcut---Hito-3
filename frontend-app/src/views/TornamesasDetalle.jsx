import ProductoDetalle from "../componentes/productoDetalle/ProductoDetalle.jsx";
import "./Views.css";

const TornamesasDetalle = () => {
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
      <ProductoDetalle />
    </>
  );
};

export default TornamesasDetalle;
