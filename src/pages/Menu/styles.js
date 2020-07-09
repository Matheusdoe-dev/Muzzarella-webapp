import styled from "styled-components";
// imgs
import footerImg from "../../assets/imgs/footer-img-menu.jpg";

export const CustomizationSection = styled.section`
  & {
    padding: var(--gap-xl);
    text-align: center;

    h4 {
      margin-bottom: var(--gap-lg);
    }
  }
`;

export const FooterImg = styled.div`
  & {
    background: url(${footerImg});
    height: 80px;
  }
`;
