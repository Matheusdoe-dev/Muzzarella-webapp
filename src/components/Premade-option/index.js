import React, { useContext } from "react";
// styled-component
import { PremadeOptionWrapper } from "./styles";
// contexts
import { OrderContext } from "../../hooks/order";

const PremadeOption = ({ image, alt, value, description, ...props }) => {
  // contexts
  const orderContext = useContext(OrderContext);

  return (
    <PremadeOptionWrapper>
      <img src={image} alt={alt} />
      <label>
        <input
          type="checkbox"
          value={value}
          checked={orderContext?.handleChecked(value)}
          onChange={(event) =>
            orderContext?.handleItems(
              event,
              event.currentTarget.value,
              "Premade",
              "checkbox"
            )
          }
          {...props}
        />
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
