import styled from "styled-components";
// imgs
import footerImg from "../../assets/imgs/footer-img-muzzarella.jpg";

export const OurFeaturesSection = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: var(--support-color-2);

    h3 {
      margin-bottom: var(--gap-lg);
      text-align: center;
    }

    @media (max-width: 767.98px) {
      .row:last-child div[class^="col"] {
        margin-bottom: var(--gap-sm);

        &::last-child {
          margin-bottom: 0;
        }
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
