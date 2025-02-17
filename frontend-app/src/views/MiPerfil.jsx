import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LayoutGrid from "../componentes/miperfil/LayoutGrid.jsx";
import Footer from "../componentes/footer/Footer.jsx";

const MiPerfil = () => {
  return (
    <>
      <LayoutGrid />
      <Footer />
    </>
  );
};

export default MiPerfil;
