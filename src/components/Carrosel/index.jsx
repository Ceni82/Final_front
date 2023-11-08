import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Container } from "./styles";
import { Card } from "../Card";
import { FiEdit2 } from "react-icons/fi";

export function Carrosel({ dishesArray, title }) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <h1>{title}</h1>
      <button className="leftBtn" onClick={handleLeftClick}>
        <MdKeyboardArrowRight size={50} />
      </button>
      <button className="rightBtn" onClick={handleRightClick}>
        <MdKeyboardArrowRight size={50} />
      </button>
      <div className="carousel" ref={carousel}>
        {dishesArray.map((dish) => (
          <Card icon={FiEdit2} key={dish.id} data={dish}></Card>
        ))}
      </div>
    </Container>
  );
}
