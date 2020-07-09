import styled from "styled-components";
// imgs
import footerImg from "../../assets/imgs/footer-img-muzzarella.jpg";

export const OurFeaturesSection = styled.section`
  & {
    padding: var(--gap-xl);
    background: var(--support-color-2);

    h3 {
      margin-bottom: var(--gap-lg);
      text-align: center;
    }

    img {
      max-width: 100%;
      border-radius: 50px 50px 0 0;
    }
  }
`;

export const FeatureInfo = styled.div`
  & {
    background: var(--support-color-5);
    color: var(--support-color-1);
    padding: var(--gap-sm);
    text-align: center;
    border-radius: 0 0 50px 50px;
  }
`;

export const FooterImg = styled.div`
  & {
    background: url(${footerImg});
    height: 80px;
  }
`;
