import styled from "styled-components";

export const PageTitleWrapper = styled.div`
  & {
    background: url(${(props) => props.bg});
    background-blend-mode: darken;
    height: auto;
    padding: var(--gap-md) 0;
    display: flex;
    justify-content: center;

    h3 {
      color: var(--support-color-1);
      text-align: center;
      align-self: center;
      &:after {
        content: "";
        display: block;
        width: 30px;
        height: 4px;
        background: var(--support-color-1);
        margin: var(--gap) auto 0 auto;
      }
    }

    @media (max-width: 767.98px) {
      & {
      }
    }
  }
`;
