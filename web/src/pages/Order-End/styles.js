import styled from "styled-components";

export const OrderEndWrapper = styled.form`
  & {
    padding: var(--gap-xl) 0;
    text-align: center;

    h4 {
      color: var(--base-color);
    }

    p {
      margin: 0 auto;
      margin-bottom: var(--gap);
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;
