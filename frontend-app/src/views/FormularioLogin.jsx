import Login from "../componentes/login/Login.jsx";
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
    </>
  );
};

export default FormularioLogin;
