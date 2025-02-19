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
    </>
  );
};

export default VinilosDetalle;
