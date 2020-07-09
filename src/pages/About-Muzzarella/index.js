import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Slides from "../../components/Slides/index";
// style
import { FooterImg, OurFeaturesSection, FeatureInfo } from "./styles";
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
              <img src={featureImg1} alt="" />
              <FeatureInfo>
                <h4>Fast Delivery</h4>
                <p>Lorem ipsum is simply dummy text of the</p>
              </FeatureInfo>
            </Col>
            <Col xs="12" sm="4">
              <img src={featureImg2} alt="" />
              <FeatureInfo>
                <h4>Order at your home</h4>
                <p>Lorem ipsum is simply dummy text of the</p>
              </FeatureInfo>
            </Col>
            <Col xs="12" sm="4">
              <img src={featureImg3} alt="" />
              <FeatureInfo>
                <h4>Customize your order</h4>
                <p>Lorem ipsum is simply dummy text of the</p>
              </FeatureInfo>
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
