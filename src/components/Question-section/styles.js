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
  }
`;
