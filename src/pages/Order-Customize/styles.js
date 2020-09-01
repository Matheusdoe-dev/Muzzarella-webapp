import styled from "styled-components";

export const OrderCustomizeWrapper = styled.form`
  & {
    padding: var(--gap-xl) 0;

    .row {
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: var(--support-color-4);
        opacity: 20%;
      }

      &::before {
        margin: var(--gap-sm) 0;
      }

      &::after {
        margin-top: var(--gap-sm);
      }

      h4 {
        text-align: center;
        margin-bottom: var(--gap-md);
      }
    }

    .row:last-child {
      &::before {
        content: "";
        display: none;
      }
    }

    button {
      margin-top: var(--gap-md);
    }
  }
`;
