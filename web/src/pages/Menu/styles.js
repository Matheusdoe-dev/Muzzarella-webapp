import styled from "styled-components";
// imgs
import footerImg from "../../assets/imgs/footer-img-menu.jpg";

export const CustomizationSection = styled.section`
  & {
    padding: var(--gap-xl) 0;
    text-align: center;

    h4 {
      margin-bottom: var(--gap-lg);
    }

    .row:nth-child(2) {
      margin-bottom: var(--gap-md);
    }

    @media (max-width: 767.98px) {
      .row:nth-child(2) div[class^="col"]:first-child,
      .row:nth-child(3) div[class^="col"]:first-child {
        margin-bottom: var(--gap-md);
      }
    }
  }
`;

export const FooterImg = styled.div`
  & {
    background: url(${footerImg});
    height: 80px;
  }
`;
