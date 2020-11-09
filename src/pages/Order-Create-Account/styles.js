import styled from "styled-components";

export const OrderSignInWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    a,
    span {
      display: block;
      text-align: center;
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
