import React from "react";
import { useHistory } from "react-router-dom";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
import Input from "../../components/Input";
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
              <Input type="number" name="card-number" label="Card Number" />

              <Row>
                <Col xs="6" sm="4">
                  <Input
                    name="card-validate"
                    label="Card Valid"
                    maxLength="5"
                    placeholder="mm/yy"
                  />
                </Col>
                <Col xs="6" sm="4">
                  <Input
                    type="number"
                    name="card-valid"
                    label="CVV"
                    maxLength="3"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm={{ span: 6, offset: 1 }}>
              <Row>
                <Col xs="6">
                  <Input name="first-name" label="First Name" />
                </Col>
                <Col xs="6">
                  <Input name="last-name" label="Last Name" />
                </Col>
              </Row>
              <Input name="billing-adress" label="Billing Adress" />
              <Row>
                <Col xs="6">
                  <Input name="city" label="City" />
                </Col>
                <Col xs="6">
                  <Input name="zip-code" label="Zip code" />
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
