import styled from "styled-components";

export const SlidesWrapper = styled.div`
  & {
    padding: var(--gap-xl) 0;

    img {
      border-radius: 50px;
    }

    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;
