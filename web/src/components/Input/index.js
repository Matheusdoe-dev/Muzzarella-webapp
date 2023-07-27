import React from "react";
// styles
import { InputWrapper } from "./styles";

const Input = ({ label, name, value, setValue, error, ...props }) => {
  return (
    <InputWrapper>
      <div>
        <label htmlFor={name}>{label}</label>
        {error && <span>{error}</span>}
      </div>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
        class={error ? "error" : ""}
      />
    </InputWrapper>
  );
};

export default Input;
