import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import CTASection from "../../components/CTA-Section/index";
import Footer from "../../components/Footer/index";
// style
import { Hero, Intro } from "./styles";
// imgs
import introImg from "../../assets/imgs/home-intro-img.jpg";

const Index = () => {
  return (
    <>
      <Header />

      <Hero>
        <Container>
          <Row>
            <Col xs="12">
              <h1>Muzzarella</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </Col>
          </Row>
        </Container>
      </Hero>

      <Intro>
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col xs="12" sm="7">
              <h3>Our own food order delivery system</h3>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make
              </p>

              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make
              </p>
            </Col>
            <Col xs="12" sm="5">
              <img
                src={introImg}
                alt="Imagem de introdução, entregador de pizza"
              />
            </Col>
          </Row>
        </Container>
      </Intro>

      <CTASection />

      <Footer />
    </>
  );
};

export default Index;
