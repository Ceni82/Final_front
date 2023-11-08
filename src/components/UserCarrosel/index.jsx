import { useRef } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import { Container } from "./styles";
import { CardWithButtons } from "../CardWithButtons";

export function UserCarrosel({ dishesArray, title }) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault;
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault;
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
          <CardWithButtons key={dish.id} icon={AiOutlineHeart} data={dish} />
        ))}
      </div>
    </Container>
  );
}
