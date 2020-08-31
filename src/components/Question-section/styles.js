import styled from "styled-components";

export const QuestionWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--secondary-color);

    form {
      margin: 0 auto;
    }

    h3 {
      text-align: center;
      margin-bottom: var(--gap-md);
    }

    label,
    input,
    textarea {
      display: block;
    }

    input,
    textarea {
      width: 100%;
      padding: var(--gap) var(--gap-md);
      border: none;
      border-radius: 50px;
      margin-bottom: var(--gap-sm);

      &:focus {
        outline: none;
        background: var(--support-color-2);
      }
    }

    textarea {
      height: 140px;

      &::placeholder {
        margin-top: var(--gap);
      }
    }
  }
`;
