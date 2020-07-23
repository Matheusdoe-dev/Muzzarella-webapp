import React from "react";
import { useHistory } from "react-router-dom";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { CheckoutWrapper, Checkmark } from "./styles";
import { SubmitButton } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-checkout.jpg";

const OrderCheckout = () => {
  const history = useHistory();

  const handleLocationValidation = () => {
    history.push("/order/end");
  };

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Checkout" />
      <Breadcrumbs />

      <CheckoutWrapper onSubmit={handleLocationValidation}>
        <Container>
          <Row>
            <Col xs="12" sm="5">
              <label for="card-number">Card Number</label>
              <input
                type="number"
                name="card-number"
                id="card-number"
                placeholder="Enter your card number"
                required
              />
              <Row>
                <Col xs="6" sm="4">
                  <label for="card-validate">Card Valid</label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="mm/yy"
                    maxLength="4"
                    required
                  />
                </Col>
                <Col xs="6" sm="4">
                  <label for="card-valid">
                    CVV<sup>*</sup>
                  </label>
                  <input
                    type="number"
                    name="card-valid"
                    id="card-valid"
                    maxLength="3"
                    required
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm={{ span: 6, offset: 1 }}>
              <Row>
                <Col xs="6">
                  <label for="first-name">First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </Col>
                <Col xs="6">
                  <label for="last-name">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Enter your last name"
                    required
                  />
                </Col>
              </Row>
              <label for="billing-adress">Billing Adress</label>
              <input
                type="text"
                name="billing-adress"
                id="billing-adress"
                placeholder="Enter your billing adress"
                required
              />
              <Row>
                <Col xs="6">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your city name"
                    required
                  />
                </Col>
                <Col xs="6">
                  <label for="zip-code">Zip code</label>
                  <input
                    type="number"
                    name="zip-code"
                    id="zip-code"
                    placeholder="Enter your zip code"
                    required
                  />
                </Col>
              </Row>
              <Checkmark>
                <label
                  for="delivey-is-billing-adress"
                  style={{ display: "inline-block" }}
                >
                  <input
                    type="checkbox"
                    id="delivey-is-billing-adress"
                    name="delivey-is-billing-adress"
                  />
                  <span></span>
                  <p>Delivery same as billing address</p>
                </label>
              </Checkmark>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm={{ span: 4, offset: 4 }}>
              <SubmitButton
                background="var(--base-color)"
                color="var(--support-color-1)"
              >
                Checkout
              </SubmitButton>
            </Col>
          </Row>
        </Container>
      </CheckoutWrapper>

      <Footer />
    </>
  );
};

export default OrderCheckout;
