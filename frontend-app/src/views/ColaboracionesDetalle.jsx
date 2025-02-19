import ColaboracionDetalle from "../componentes/productoDetalle/ColaboracionDetalle.jsx";

import "./Views.css";

const ColaboracionesDetalle = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>COLABORACIONES</strong>
          </p>
        </div>
      </header>

      {/*POOL DE COLABORACIONES*/}
      <ColaboracionDetalle />
    </>
  );
};

export default ColaboracionesDetalle;
