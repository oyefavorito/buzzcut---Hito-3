import "./Carrito.css";

import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useContext } from "react";
import { Context } from "../../contexts/CardContext";

const CarritoProductos = () => {
  const { cart, decreaseCount, increaseCount, totalCart, monedaLocal } =
    useContext(Context);

  {
    /*LÓGICA ALERTA PARA PAGAR*/
  }

  const handleIrAPagar = () => {
    Swal.fire({
      title: "Ingresa tu correo electrónico para hacer envío de tu ticket",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Enviar",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `https://api.github.com/users/${login}`;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(
              JSON.stringify(await response.json())
            );
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
      customClass: {
        popup: "my-custom-popup-class custom-swal-background",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  return (
    <section id="carritoConProductos">
      <Table responsive>
        <tbody>
          {cart.map((productos, index) => (
            <tr id="tablaCarrito" key={index}>
              <td>
                <img
                  id="carritoImgDetalle"
                  src={productos.img_url || productos.img} // Usa img_url si img no existe
                  alt={productos.nombre}
                />
              </td>
              <td className="w-75 text-capitalize" id="bordeCount">
                {productos.nombre}
              </td>
              <td id="borde">
                <Button
                  id="botonCarritoMenos"
                  onClick={() => decreaseCount(index)}
                >
                  -
                </Button>
              </td>
              <td id="bordeCount">{productos.count}</td>
              <td id="borde">
                <Button
                  id="botonCarritoMas"
                  onClick={() => increaseCount(index)}
                >
                  +
                </Button>
              </td>
              <td id="bordeCount">=</td>
              <td id="bordeCount">
                {monedaLocal(productos.count * productos.precio)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end fw-bold" id="totalTexto">
              Total
            </td>
            <td>=</td>
            <td className="fw-bold" id="totalPrecio">
              {monedaLocal(totalCart)}
            </td>
          </tr>
        </tfoot>
      </Table>
      <Button id="botonCarrito" className="float-end" onClick={handleIrAPagar}>
        Ir a pagar
      </Button>
    </section>
  );
};

export default CarritoProductos;
