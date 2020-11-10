import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import SEO from "../../components/SEO";
// styled-components
import { OrderEndWrapper } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-end.jpg";

const OrderCheckout = () => {
  return (
    <>
      <SEO
        title="Thanks!"
        description="Thanks to consume our services, you're welcome"
      />

      <Header />
      <PageTitle background={pageTitleImg} title="Thanks!" />

      <OrderEndWrapper>
        <Container>
          <Row>
            <Col xs="12">
              <h4>Thanks for order with us. :)</h4>
              <p>Check your email with the order details</p>

              <span>Contact us for more questions and suggestions.</span>
            </Col>
          </Row>
        </Container>
      </OrderEndWrapper>

      <Footer />
    </>
  );
};

export default OrderCheckout;
