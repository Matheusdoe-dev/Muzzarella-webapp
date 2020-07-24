import styled from "styled-components";

export const OrderSignInWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    input,
    label {
      display: block;
    }

    label {
      font-size: 1.375rem;
      margin-bottom: var(-gap);
    }

    input {
      background: var(--support-color-1);
      border-radius: 50px;
      width: 100%;
      padding: var(--gap);
      border: none;
      margin-bottom: var(--gap-sm);

      &:focus {
        outline: none;
        background: var(--support-color-2);
      }
    }

    a,
    span {
      display: block;
      text-align: center;
    }

    span {
      margin: var(--gap-sm) auto;
    }

    .row:nth-child(2) {
      @media (max-width: 767.98px) {
        div[class^="col"]:first-child {
          margin: var(--gap-sm) 0;
        }

        div[class^="col"]:first-child {
          margin-bottom: var(--gap-sm);
        }
      }
    }
  }
`;
