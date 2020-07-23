import styled from "styled-components";
// imgs

export const OrderLocationWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    label,
    input,
    span {
      display: block;
    }

    label {
      font-size: 1.375rem;
      margin-bottom: var(-gap);
    }

    span {
      margin-top: calc(var(--gap) / 2);
      font-size: 0.75rem;
      filter: brightness(85%);
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
  }
`;
