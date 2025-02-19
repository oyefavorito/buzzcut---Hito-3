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
    </>
  );
};

export default Vinilos;
