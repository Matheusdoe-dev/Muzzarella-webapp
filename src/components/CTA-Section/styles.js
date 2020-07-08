import styled from "styled-components";
import { Link } from "react-router-dom";

export const CTAWrapper = styled.section`
  & {
    background: var(--secondary-color);
    padding: var(--gap-xl) 0;

    p {
      margin-top: var(--gap-sm);
    }
  }
`;

export const CtaButton = styled(Link)`
  & {
    display: inline-block;
    padding: calc(var(--gap) / 2) 0;
    width: 272px;
    background: var(--base-color);
    color: var(--support-color-1);
    text-align: center;
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
