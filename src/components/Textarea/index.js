import React from "react";
// styles
import { TextareaWrapper } from "./styles";

const Textarea = ({ label, name, value, setValue, ...props }) => {
  return (
    <TextareaWrapper>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...props} />
    </TextareaWrapper>
  );
};

export default Textarea;
