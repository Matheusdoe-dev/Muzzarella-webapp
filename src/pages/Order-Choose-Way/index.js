import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { ChooseWrapper } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-customization-way.jpg";

const ChooseWay = () => {
  return (
    <>
      <Header />
      <PageTitle
        background={pageTitleImg}
        title="Choose your customization way"
      />
      <Breadcrumbs />

      <ChooseWrapper>
        <Container>
          <Row>
            <Col xs={{ span: 6, offset: 3 }}>
              <Button
                background="var(--base-color)"
                color="var(--support-color-1)"
                to="/order/customize"
              >
                Customize your order
              </Button>
              <span>or</span>
              <Button
                background="var(--support-color-1)"
                color="var(--support-color-4)"
                to="/order/premade"
              >
                Select premade options
              </Button>
            </Col>
          </Row>
        </Container>
      </ChooseWrapper>

      <Footer />
    </>
  );
};

export default ChooseWay;
