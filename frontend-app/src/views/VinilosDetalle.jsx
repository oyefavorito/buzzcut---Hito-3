import Footer from "../componentes/footer/Footer.jsx";
import ProductoDetalle from "../componentes/productoDetalle/ProductoDetalle.jsx";

const VinilosDetalle = () => {
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
      <ProductoDetalle />

      {/*FOOTER*/}
      <Footer />
    </>
  );
};

export default VinilosDetalle;
