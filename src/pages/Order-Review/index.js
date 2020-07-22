import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { ReviewWrapper } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-review.jpg";

const OrderReview = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Review your order" />
      <Breadcrumbs />

      <ReviewWrapper>
        <Container>
          <Row>
            <Col xs={{ span: 2, offset: 2 }}>
              <h4>Item</h4>
              <p>Pasta</p>
              <p>Size</p>
              <p>Sauce</p>
              <p>Toppings</p>
            </Col>
            <Col xs="4">
              <h4>Description</h4>
              <p>Average</p>
              <p>Family</p>
              <p>Tradicional Tomato</p>
              <ul>
                <li>Mozzarella</li>
                <li>Sausage</li>
                <li>Catupiry</li>
                <li>Pepperoni</li>
              </ul>
            </Col>
            <Col xs="2">
              <h4>Price</h4>
              <p>£ 8,00</p>
              <p>£ 8,00</p>
              <p>£ 8,00</p>
              <ul>
                <li>£ 4,00</li>
                <li>£ 4,00</li>
                <li>£ 4,00</li>
                <li>£ 4,00</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <p>Subtotal</p>
            </Col>
            <Col xs="2">
              <p>£ 34,00</p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 4, offset: 2 }}>
              <Button
                to="/order/signin"
                background="var(--base-color)"
                color="var(--support-color-1)"
              >
                Checkout
              </Button>
            </Col>
            <Col xs="4">
              <Button
                to="/order/premade"
                background="var(--support-color-1)"
                color="var(--support-color-4)"
              >
                Change order
              </Button>
            </Col>
          </Row>
        </Container>
      </ReviewWrapper>

      <Footer />
    </>
  );
};

export default OrderReview;
