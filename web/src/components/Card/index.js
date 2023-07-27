import React from "react";
// styled-components
import { CardWrapper } from "./styles";

const Card = ({ image, alt, title, subtitle }) => {
  return (
    <CardWrapper>
      <img src={image} alt={alt} />
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;
