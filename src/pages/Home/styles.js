import styled from "styled-components";
// imgs
import heroImg from "../../assets/imgs/bg-main.jpg";
import footerImg from "../../assets/imgs/footer-img-home.jpg";

export const Hero = styled.div`
  & {
    background-image: url(${heroImg});
    background-clip: cover;
    height: 628px;

    h1,
    p {
      text-align: center;
      color: var(--support-color-1);
    }

    h1 {
      margin-top: calc(var(--gap-lg) * 2);
    }

    p {
      font-size: 1.375rem;
      margin: var(--gap) auto 0 auto;
    }
  }
`;

export const Intro = styled.section`
  & {
    background: var(--support-color-1);
    padding: var(--gap-xl) 0;

    p {
      margin-top: var(--gap);
    }

    p,
    h3 {
      color: var(--base-color);
    }

    img {
      border-radius: 50px;
    }
  }
`;

export const FooterImg = styled.div`
  & {
    background: url(${footerImg});
    height: 80px;
  }
`;
