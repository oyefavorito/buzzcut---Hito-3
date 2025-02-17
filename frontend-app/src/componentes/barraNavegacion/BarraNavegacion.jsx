import "./BarraNavegacion.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useContext } from "react";

import { Context } from "../../contexts/CardContext";
import IconoCarrito from "../IconoCarrito";

const BarraNavegacion = () => {
  const { totalCart, monedaLocal } = useContext(Context);

  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark bg-dark" id="barraNavegacion">
  <Container>
    {/* Logo */}
    <Navbar.Brand as={NavLink} to="/">
      <h1>BUZZCUT</h1>
    </Navbar.Brand>

    {/* Botón de colapso para móviles */}
    <Navbar.Toggle aria-controls="navbar-nav" />

    <Navbar.Collapse id="navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link as={NavLink} to="/tornamesas"><strong>TORNAMESAS</strong></Nav.Link>
        <Nav.Link as={NavLink} to="/vinilos"><strong>VINILOS</strong></Nav.Link>
        <Nav.Link as={NavLink} to="/audio"><strong>AUDIO</strong></Nav.Link>
        <Nav.Link as={NavLink} to="/colaboraciones"><strong>COLABORACIONES</strong></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to="/registro"><strong>REGISTRARME</strong></Nav.Link>
        <Nav.Link as={NavLink} to="/login"><strong>INICIAR SESIÓN</strong></Nav.Link>
        <Nav.Link as={NavLink} to="/carrito" className={totalCart ? "cart-price" : "cart"}>
          <IconoCarrito tamaño="1.7rem" color="white" />
          {totalCart ? " " + monedaLocal(totalCart) : null}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default BarraNavegacion;