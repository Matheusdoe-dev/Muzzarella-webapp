import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: block;
  text-align: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: calc(var(--gap) / 2) var(--gap);
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  transition: 0.2s;

  :hover {
    filter: brightness(80%);
    color: var(--secondary-color);
    transition: 0.2s;
  }
`;

export const SubmitButton = styled.button`
  & {
    display: block;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    padding: calc(var(--gap) / 2) var(--gap);
    width: ${(props) => (props.width ? props.width : `100%`)};
    margin: 0 auto;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    transition: 0.2s;

    :hover {
      filter: brightness(80%);
      color: var(--secondary-color);
      transition: 0.2s;
    }
  }
`;
