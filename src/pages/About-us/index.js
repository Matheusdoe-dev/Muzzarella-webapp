import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
// styled-components
import { FooterImg, AboutUsSection } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/bg-page-title-aboutus.jpg";
import ourHistoryImg from "../../assets/imgs/about-us-img-1.jpg";
import ourValuesImg from "../../assets/imgs/about-us-img-2.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="About us" />

      <AboutUsSection>
        <Container>
          <Row style={{ marginBottom: 67 }}>
            <Col xs="12" sm="6">
              <h4>Our history</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </Col>
            <Col xs="12" sm="6">
              <img src={ourHistoryImg} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <h4>Our history</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </Col>
            <Col xs="12" sm="6">
              <img src={ourValuesImg} alt="" />
            </Col>
          </Row>
        </Container>
      </AboutUsSection>

      <FooterImg />
      <Footer />
    </>
  );
};

export default AboutUs;
