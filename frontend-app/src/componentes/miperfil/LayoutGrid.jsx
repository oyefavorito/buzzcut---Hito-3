import "./LayoutGrid.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardMisCompras from "../cardProducto/CardMisCompras";
import CardMisColaboraciones from "../cardProducto/CardMisColaboraciones";
import Post from "../post/Post";

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // URL del backend desde las variables de entorno

const MiPerfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const obtenerPerfil = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}/usuarios/miperfil`, { // Reemplazo de la URL local
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsuario(data.perfil);
        } else {
          setMensaje(data.mensaje || "Error al obtener el perfil.");
        }
      } catch (error) {
        setMensaje("Error en la conexión con el servidor.");
      }
    };
    obtenerPerfil();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container fluid id="miPerfilCuerpo">
      <Row>
        {/* 🟣 Columna izquierda: siempre ocupa 3 en pantallas grandes, 12 en móviles */}
        <Col md={3} xs={12} className="left-column bg-dark text-white p-3">
          <h4 id="perfilTitulo">MI PERFIL</h4>
          {mensaje && <p>{mensaje}</p>}
          {usuario ? (
            <>
              <p id="perfilDato">
                <strong>Nombre:</strong> {usuario.nombre_apellido}
              </p>
              <p id="perfilDato">
                <strong>Correo:</strong> {usuario.correo}
              </p>
              <p id="perfilDato">
                <strong>Teléfono:</strong> {usuario.telefono}
              </p>
              <p id="perfilDato">
                <strong>Dirección:</strong> {usuario.direccion}
              </p>
              <p id="perfilDato">
                <strong>Ciudad:</strong> {usuario.ciudad}
              </p>
              <Button
                className="mt-3 w-100"
                onClick={logout}
                id="buttonCardPerfil"
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <p>Cargando perfil...</p>
          )}
        </Col>

        {/* 🔵 Columna derecha: Contenido responsivo */}
        <Col md={9} xs={12} className="right-column">
          <div className="content-section">
            <div className="section-header">
              <div id="contenerTextoTitulo">
                <div id="fondoTextoTitulo">
                  <p id="titulo">MIS COMPRAS</p>
                </div>
              </div>{" "}
            </div>
            <CardMisCompras />
          </div>

          <div className="content-section">
            <div className="section-header">
              <div id="contenerTextoTitulo">
                <div id="fondoTextoTitulo">
                  <p id="titulo">MIS COLABORACIONES</p>
                </div>
              </div>{" "}
            </div>
            <CardMisColaboraciones />
          </div>

          <div className="content-section">
            <div className="section-header">
              <div id="contenerTextoTitulo">
                <div id="fondoTextoTitulo">
                  <p id="titulo">COLABORAR</p>
                </div>
              </div>
            </div>
            <Post />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MiPerfil;
