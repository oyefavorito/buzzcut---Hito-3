import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Registro from "../componentes/registro/Registro.jsx";
import Footer from "../componentes/footer/Footer.jsx";

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
      <Footer />
    </>
  );
};

export default FormularioRegistro;
