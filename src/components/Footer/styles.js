import styled from "styled-components";

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-lg) 0;
    background: var(--support-color-4);

    h4 {
      color: var(--support-color-1);
    }

    ul {
      margin-top: var(--gap-sm);
      list-style: none;
      padding-left: 0;

      li {
        color: var(--support-color-1);
        margin-bottom: calc(var(--gap) / 2);
      }

      a {
        color: var(--support-color-1);
      }

      li,
      a {
        filter: brightness(85%);
      }
    }
  }
`;

export const SocialMediasWrapper = styled.div`
  & {
    margin-top: var(--gap-sm);

    a {
      margin-right: var(--gap);
    }
  }
`;
