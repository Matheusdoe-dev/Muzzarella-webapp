import React from "react";
// components
import { Col } from "react-bootstrap";
// styles
import { Checkmark } from "./styles";

const CheckboxList = ({ options, name, type, ...props }) => {
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
