import React, { useContext } from "react";
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
// contexts
import { OrderContext } from "../../hooks/order";

const ChooseWay = () => {
  // contexts
  const orderContext = useContext(OrderContext);

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
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <Button
                background="var(--base-color)"
                color="var(--support-color-1)"
                onClick={orderContext?.handleOrderWay}
                to="/order/customize"
              >
                Customize your order
              </Button>
              <span>or</span>
              <Button
                background="var(--support-color-1)"
                color="var(--support-color-4)"
                onClick={orderContext?.handleOrderWay}
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
