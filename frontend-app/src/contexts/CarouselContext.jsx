import React from "react";
import { useState, createContext, useEffect } from "react";

// Contexto
export const Context = createContext();

const CarouselContext = ({ children }) => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const res = await fetch("/json/carousel.json"); // Ruta relativa desde la carpeta public
        if (!res.ok) {
          throw new Error(`Error al obtener los datos: ${res.status}`);
        }
        const data = await res.json();
        setCarouselItems(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <Context.Provider value={{ carouselItems }}>{children}</Context.Provider>
  );
};

export default CarouselContext;
