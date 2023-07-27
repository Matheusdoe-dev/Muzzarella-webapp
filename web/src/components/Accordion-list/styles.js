import styled from "styled-components";

export const AccordionListWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--support-color-6);
    text-align: left;

    .card-header,
    .accordion,
    .card {
      background: none;
      border: none;
      text-align: left;
    }

    .card-header,
    .card-body,
    .btn {
      padding: 0;
      margin: 0;
    }

    .card {
      margin-bottom: var(--gap-md);
      text-align: left;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }

    .card-header {
      margin-bottom: var(--gap) !important;
    }

    .card-body {
      color: var(--support-color-1);
      filter: brightness(85%);
      margin-bottom: 0;
    }

    .btn {
      text-decoration: none;

      &:hover,
      &:active {
        text-decoration: none;
        outline: none;
      }
    }

    h4 {
      color: var(--support-color-1);
      margin-bottom: 0;
      text-align: left;

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
