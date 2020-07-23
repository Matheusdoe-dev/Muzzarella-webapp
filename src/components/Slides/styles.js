import styled from "styled-components";

export const SlidesWrapper = styled.div`
  & {
    img {
      border-radius: 50px;
      padding: var(--gap-xl) 0;
    }

    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;
