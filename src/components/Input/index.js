import React from "react";
// styles
import { InputWrapper } from "./styles";

const Input = ({ label, name, value, setValue, ...props }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} {...props} />
    </InputWrapper>
  );
};

export default Input;
