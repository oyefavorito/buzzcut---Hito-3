import React, { useState, createContext, useEffect } from "react";

// Contexto
export const Context = createContext();

const AppContext = ({ children }) => {
  const [cardItems, setCardItems] = useState([]); // Productos
  const [cart, setCart] = useState([]); // Carrito

  // Obtener productos desde el JSON
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await fetch("/json/productos.json");
        if (!res.ok)
          throw new Error(`Error al obtener los datos: ${res.status}`);
        const data = await res.json();
        setCardItems(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  // ✅ Funciones de carrito
  const monedaLocal = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const addCart = (producto) => {
    // Asegúrate de tener una propiedad 'id_producto' consistente
    const productoId = producto.id_producto || producto.id;

    const foundIndex = cart.findIndex(
      (item) => item.id_producto === productoId
    );

    if (foundIndex === -1) {
      const nuevoProducto = {
        id_producto: productoId,
        nombre: producto.nombre,
        img_url: producto.img_url || producto.img, // Unificar clave para imagen
        precio: producto.precio,
        count: 1,
      };
      setCart([...cart, nuevoProducto]);
    } else {
      const updatedCart = [...cart];
      updatedCart[foundIndex].count++;
      setCart(updatedCart);
    }
  };

  const increaseCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  const decreaseCount = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count === 1) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index].count -= 1;
    }
    setCart(updatedCart);
  };

  const totalCart = cart.reduce(
    (acc, item) => acc + item.precio * item.count,
    0
  );

  return (
    <Context.Provider
      value={{
        cardItems,
        cart,
        setCart,
        addCart,
        increaseCount,
        decreaseCount,
        totalCart,
        monedaLocal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
