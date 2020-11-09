import styled from "styled-components";

export const CardWrapper = styled.div`
  & {
    div {
      background: var(--support-color-5);
      padding: var(--gap-sm);
      text-align: center;
      border-radius: 0 0 50px 50px;

      h4,
      p {
        color: var(--support-color-1);
      }
    }

    img {
      width: 100%;
      border-radius: 50px 50px 0 0;
    }
  }
`;
