import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../componentes/login/Login.jsx";
import Footer from "../componentes/footer/Footer.jsx";

import "./Views.css";

const FormularioLogin = () => {
  return (
    <>
      {/*HEADER*/}
      <header>
        <div id="contenerTextoHeader">
          <p id="textoHeader">
            <strong>INICIAR SESIÓN</strong>
          </p>
        </div>
      </header>
      <Login />
      <Footer />
    </>
  );
};

export default FormularioLogin;
