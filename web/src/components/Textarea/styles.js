import styled from "styled-components";

export const TextareaWrapper = styled.div`
  & {
    textarea {
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

    textarea,
    label {
      display: block;
    }

    label {
      font-size: 1.375rem;
      margin-bottom: var(-gap);
    }

    textarea {
      height: 140px;

      &::placeholder {
        margin-top: var(--gap);
      }
    }
  }
`;
