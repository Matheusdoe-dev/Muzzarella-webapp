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
      padding: var(--gap) var(--gap-sm);
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
    }

    button {
      padding: calc(var(--gap) / 2) var(--gap-lg);
      border: none;
      border-radius: 50px;
      background: var(--base-color);
      color: var(--support-color-1);
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2),
        0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
      transition: 0.2s;

      :hover {
        filter: brightness(80%);
        color: var(--secondary-color);
        transition: 0.2s;
      }
    }
  }
`;
