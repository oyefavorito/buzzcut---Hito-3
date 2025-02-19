import ColaboracionCard from "../componentes/cardProducto/CardColaboraciones.jsx";

import "./Views.css";

const Colaboraciones = () => {
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

      {/*POOL DE PRODUCTOS*/}
      <ColaboracionCard filterCategory="Colaboraciones" />
    </>
  );
};

export default Colaboraciones;
