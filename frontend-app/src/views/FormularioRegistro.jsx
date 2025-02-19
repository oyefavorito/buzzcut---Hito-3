import Registro from "../componentes/registro/Registro.jsx";

import "./Views.css";

const FormularioRegistro = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>REGÍSTRATE</strong>
          </p>
        </div>
      </header>
      <Registro />
    </>
  );
};

export default FormularioRegistro;
