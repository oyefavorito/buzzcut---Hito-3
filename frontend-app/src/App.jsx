import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacion from "./componentes/barraNavegacion/BarraNavegacion";
import Provider from "./contexts/CardContext";
import CarouselContext from "./contexts/CarouselContext";
import CardContext from "./contexts/CardContext";
import Home from "./views/Home";
import Tornamesas from "./views/Tornamesas";
import Vinilos from "./views/Vinilos";
import Audio from "./views/Audio";
import Colaboraciones from "./views/Colaboraciones";
import ColaboracionesDetalle from "./views/ColaboracionesDetalle";
import TornamesasDetalle from "./views/TornamesasDetalle";
import VinilosDetalle from "./views/VinilosDetalle";
import AudioDetalle from "./views/AudioDetalle";
import FormularioRegistro from "./views/FormularioRegistro";
import FormularioLogin from "./views/FormularioLogin";
import PrivateRoute from "./componentes/miperfil/PrivateRoute";
import MiPerfil from "./views/MiPerfil";
import Footer from "./componentes/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Provider>
      <CarouselContext>
        <CardContext>
          <BrowserRouter>
            <div id="frontEndCompleto">
              <BarraNavegacion />
              <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/tornamesas" element={<Tornamesas />} />
                <Route path="/tornamesas/:id" element={<TornamesasDetalle />} />
                <Route path="/vinilos" element={<Vinilos />} />
                <Route path="/vinilos/:id" element={<VinilosDetalle />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/audio/:id" element={<AudioDetalle />} />
                <Route path="/colaboraciones" element={<Colaboraciones />} />
                <Route
                  path="/colaboraciones/:id"
                  element={<ColaboracionesDetalle />}
                />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/registro" element={<FormularioRegistro />} />
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="*" element={<NotFound />} />

                {/* Ruta protegida */}

                <Route
                  path="/miperfil"
                  element={
                    <PrivateRoute>
                      <MiPerfil />
                    </PrivateRoute>
                  }
                ></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </CardContext>
      </CarouselContext>
      <Footer />
    </Provider>
  );
}

export default App;
