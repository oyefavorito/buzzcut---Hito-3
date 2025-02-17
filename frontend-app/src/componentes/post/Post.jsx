import "./Post.css";

import React, { useState } from "react";

const Post = () => {
  const [titulo, setTitulo] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Agregar colaboración
  const agregarPost = async () => {
    if (!titulo || !imgUrl || !descripcion || !precio) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const nuevoProducto = {
      img_url: imgUrl,
      nombre: titulo,
      precio: parseInt(precio),
      descripcion,
      id_categoria: 4, // Fijo en "4" para "Colaboraciones"
    };

    try {
      const response = await fetch(
        "http://localhost:3000/colaboraciones/colaborar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(nuevoProducto),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMensaje("✅ Colaboración agregada correctamente");
        setTitulo("");
        setImgUrl("");
        setDescripcion("");
        setPrecio("");
      } else {
        setMensaje(`❌ Error: ${data.mensaje}`);
      }
    } catch (error) {
      console.error("Error al agregar producto:", error);
      setMensaje("❌ Error al conectar con el servidor");
    }
  };

  return (
    <div className="form">
      {mensaje && <p className="alert alert-info">{mensaje}</p>}

      <div className="mb-2" id="formularioPost">
        <label>Título</label>
        <input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
          placeholder="Ingrese el título"
        />
      </div>

      <div className="mb-2" id="formularioPost">
        <label>URL de la Imagen</label>
        <input
          value={imgUrl}
          onChange={(event) => setImgUrl(event.target.value)}
          className="form-control"
          placeholder="https://example.com/imagen.jpg"
        />
      </div>

      <div className="mb-2" id="formularioPost">
        <label>Precio (en números)</label>
        <input
          type="number"
          value={precio}
          onChange={(event) => setPrecio(event.target.value)}
          className="form-control"
          placeholder="Ingrese el precio"
        />
      </div>

      <div className="mb-3" id="formularioPost">
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
          placeholder="Ingrese una descripción"
        ></textarea>
      </div>

      <div className="d-flex" id="formularioPost">
        <button
          onClick={agregarPost}
          className="btn btn-primary m-auto"
          id="buttonCard"
        >
          Agregar Colaboración
        </button>
      </div>
    </div>
  );
};

export default Post;
