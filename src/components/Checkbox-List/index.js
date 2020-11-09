import React, { useContext } from "react";
// components
import { Col } from "react-bootstrap";
// styles
import { Checkmark } from "./styles";
// contexts
import { OrderContext } from "../../hooks/order";

const CheckboxList = ({ options, name, type, ...props }) => {
  // contexts
  const orderContext = useContext(OrderContext);

  return (
    <>
      {options.map((option) => (
        <Col xs="12" sm="4" md="3">
          <Checkmark key={option.name} {...props}>
            <label for={option.name}>
              <input
                type={type}
                id={option.name}
                name={name}
                value={option.name}
                checked={orderContext?.handleChecked(option.name)}
                onChange={(event) =>
                  orderContext?.handleItems(event, option.label, name, type)
                }
                {...props}
              />
              <span className={type}></span>
              <p>{option.label}</p>
            </label>
          </Checkmark>
        </Col>
      ))}
    </>
  );
};

export default CheckboxList;
