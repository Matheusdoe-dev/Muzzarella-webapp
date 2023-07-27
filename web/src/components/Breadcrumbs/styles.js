import styled from "styled-components";
// components
import { Link } from "react-router-dom";

export const BreadcrumbsWrapper = styled.div`
  & {
    margin-top: var(--gap-sm);
  }
`;

export const BreadcrumbsItem = styled(Link)`
  & {
    margin-right: var(--gap);
    font-size: 0.875rem;
    transition: 0.2s;

    &:after {
      content: ">";
      display: inline-block;
      margin-left: var(--gap);
    }

    &:last-child {
      &:after {
        content: "";
      }
    }

    &:hover {
      color: var(--secondary-color);
      transition: 0.2s;
    }

    &.active {
      color: var(--secondary-color);
      transition: 0.2s;
    }

    &.inactive {
      display: none;
    }

    @media (max-width: 767.98px) {
      & {
        font-size: 0.75rem;
      }
    }
  }
`;
