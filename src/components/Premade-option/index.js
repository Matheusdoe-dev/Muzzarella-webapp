import React from "react";
// styled-component
import { PremadeOptionWrapper } from "./styles";

const PremadeOption = ({ image, alt, value, description, ...props }) => {
  return (
    <PremadeOptionWrapper>
      <img src={image} alt={alt} />
      <label>
        <input type="checkbox" value={value} {...props} />
        <span></span>
      </label>
      <div>
        <h4>{alt}</h4>
        <p>{description}</p>
      </div>
    </PremadeOptionWrapper>
  );
};

export default PremadeOption;
