import "./Carousel.css";
import { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../../contexts/CarouselContext";


function ControlledCarousel() {
  const { carouselItems } = useContext(Context); // contexto
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (!carouselItems || carouselItems.length === 0) {
    return <p>Cargando carrusel...</p>; // Fallback para errores
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.img} //imagen del JSON
            alt={item.texto}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{item.texto}</h3>
            <p>{item.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;