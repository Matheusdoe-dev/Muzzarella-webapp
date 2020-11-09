import styled from "styled-components";

export const InputWrapper = styled.div`
  & {
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

    input,
    label {
      display: block;
    }

    label {
      font-size: 1.375rem;
      margin-bottom: var(-gap);
    }

    div {
      display: flex;
      justify-content: space-between;

      span {
        color: var(--danger);
      }
    }

    .error {
      border: 1px solid var(--danger);
    }
  }
`;
