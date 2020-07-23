import styled from "styled-components";

export const FooterWrapper = styled.footer`
  & {
    padding: var(--gap-lg) 0;
    background: var(--support-color-4);

    h4 {
      color: var(--support-color-1);
    }

    img {
      margin: 0 auto var(--gap) auto;
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
        filter: brightness(85%);

        &:hover {
          color: var(--secondary-color);
          transition: 0.2s;
        }
      }
    }

    @media (max-width: 767.98px) {
      & {
        text-align: center;
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

    img {
      display: inline-block;
    }

    @media (max-width: 767.98px) {
      & {
        margin: 0 auto;
      }
    }
  }
`;
