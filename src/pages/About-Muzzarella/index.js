import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Slides from "../../components/Slides/index";
import Card from "../../components/Card";
// styled-components
import { FooterImg, OurFeaturesSection } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/bg-page-title-muzzarella.jpg";
import featureImg1 from "../../assets/imgs/feature-img-1.jpg";
import featureImg2 from "../../assets/imgs/feature-img-2.jpg";
import featureImg3 from "../../assets/imgs/feature-img-3.jpg";

const AboutMuzzarella = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="About Muzzarella" />

      <OurFeaturesSection>
        <Container>
          <Row>
            <Col xs="12">
              <h3>Our features</h3>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="4">
              <Card
                image={featureImg1}
                alt="Fast Delivery"
                title="Fast Delivery"
                subtitle="Lorem ipsum is simply dummy text of the"
              />
            </Col>
            <Col xs="12" sm="4">
              <Card
                image={featureImg2}
                alt="Order at your home"
                title="Order at your home"
                subtitle="Lorem ipsum is simply dummy text of the"
              />
            </Col>
            <Col xs="12" sm="4">
              <Card
                image={featureImg3}
                alt="Customize your order"
                title="Customize your order"
                subtitle="Lorem ipsum is simply dummy text of the"
              />
            </Col>
          </Row>
        </Container>
      </OurFeaturesSection>

      <Slides />
      <FooterImg />
      <Footer />
    </>
  );
};

export default AboutMuzzarella;
