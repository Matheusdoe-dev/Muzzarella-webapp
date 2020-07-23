import styled from "styled-components";
// imgs
import footerImg from "../../assets/imgs/footer-img-aboutus.jpg";

export const AboutUsSection = styled.section`
  & {
    padding: var(--gap-xl) 0;

    h4 {
      margin-bottom: var(--gap-sm);
    }
  }
`;

export const FooterImg = styled.div`
  & {
    background: url(${footerImg});
    height: 80px;
  }
`;
