import styled from "styled-components";

export const AccordionListWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--support-color-6);

    .card-header,
    .accordion,
    .card {
      background: none;
      border: none;
    }

    .card {
      margin-bottom: var(--gap-md);

      &:last-child {
        margin-bottom: 0 !important;
      }
    }

    .btn {
      text-decoration: none;

      &:hover,
      &:active {
        text-decoration: none;
        outline: none;
      }
    }

    .card-header,
    .card-body,
    .btn {
      padding: 0;
      margin: 0;
    }

    .card-header {
      margin-bottom: var(--gap) !important;
    }

    .card-body {
      color: var(--support-color-1);
      filter: brightness(85%);
      margin-bottom: 0;
    }

    h4 {
      color: var(--support-color-1);
      margin-bottom: 0;

      &::before {
        content: "";
        display: inline-block;
        width: 26px;
        height: 19px;
        background: var(--secondary-color);
        margin-right: var(--gap);
      }
    }
  }
`;
