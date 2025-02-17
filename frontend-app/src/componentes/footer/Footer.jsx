import "./Footer.css";
import { Container } from "react-bootstrap";
import instagramlogo from "../../assets/imgs/instagramlogo.png";
import tiktoklogo from "../../assets/imgs/tiktoklogo.png";
import youtubelogo from "../../assets/imgs/youtubelogo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="footer-container">
          {/* Mapa de Google Maps */}
          <div className="footer-map">
            <p id="tituloFooter">Encuéntranos</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9994340577384!2d2.292292415674318!3d48.85884497928779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdef8e2d81d%3A0xa34c8a17aeca1b2d!2sTorre%20Eiffel!5e0!3m2!1ses!2ses!4v1636549787387!5m2!1ses!2ses"
              width="80%"
              height="70%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contenedor de correo */}
          <div className="footer-correo">
            <p id="tituloFooter">Escríbenos</p>
            <p id="tituloFooter">contactos@buzzcut.cl</p>
          </div>
          {/* Contenedor de logos */}

          <div className="footer-logos">
            <p id="tituloFooter">Contáctanos</p>
            <div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramlogo}
                  alt="Instagram"
                  className="footer-logo-ig"
                />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktoklogo} alt="Tiktok" className="footer-logo-tt" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubelogo}
                  alt="Youtube"
                  className="footer-logo-youtube"
                />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
