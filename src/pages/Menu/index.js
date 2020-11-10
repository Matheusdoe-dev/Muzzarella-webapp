import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import CTASection from "../../components/CTA-Section/index";
import Footer from "../../components/Footer/index";
import SEO from "../../components/SEO";
// styled-components
import { FooterImg, CustomizationSection } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/bg-page-title-menu.jpg";
import option1 from "../../assets/imgs/customization-img-pasta.jpg";
import option2 from "../../assets/imgs/customization-img-size.jpg";
import option3 from "../../assets/imgs/customization-img-sauce.jpg";
import option4 from "../../assets/imgs/customization-img-topping.jpg";

const Menu = () => {
  return (
    <>
      <SEO title="Menu" />

      <Header />
      <PageTitle background={pageTitleImg} title="Menu" />

      <CustomizationSection>
        <Container>
          <Row>
            <Col xs="12">
              <h4>Customization options</h4>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src={option1} alt="Pasta" />
            </Col>
            <Col xs="12" sm="6">
              <img src={option2} alt="Size" />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <img src={option3} alt="Sauce" />
            </Col>
            <Col xs="12" sm="6">
              <img src={option4} alt="Pizza Topping" />
            </Col>
          </Row>
        </Container>
      </CustomizationSection>

      <CTASection />
      <FooterImg />
      <Footer />
    </>
  );
};

export default Menu;
