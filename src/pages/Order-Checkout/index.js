import React, { useContext } from "react";
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
// contexts
import { OrderContext } from "../../hooks/order";

const OrderCheckout = () => {
  const orderContext = useContext(OrderContext);

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Checkout" />
      <Breadcrumbs />

      <CheckoutWrapper onSubmit={orderContext.handleSubmitOrder}>
        <Container>
          <Row>
            <Col xs="12" sm="5">
              <Input
                name="card-number"
                label="Card Number"
                value={orderContext.card_number}
                setValue={orderContext.setCardNumber}
                required
              />

              <Row>
                <Col xs="6" sm="4">
                  <Input
                    name="card-validate"
                    label="Card Valid"
                    maxLength="5"
                    placeholder="mm/yy"
                    value={orderContext.card_valid}
                    setValue={orderContext.setCardValid}
                    required
                  />
                </Col>
                <Col xs="6" sm="4">
                  <Input
                    type="number"
                    name="card-valid"
                    label="CVV"
                    maxLength="3"
                    value={orderContext.cvv}
                    setValue={orderContext.setCVV}
                    required
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm={{ span: 6, offset: 1 }}>
              <Row>
                <Col xs="6">
                  <Input
                    name="first-name"
                    label="First Name"
                    value={orderContext.first_name}
                    setValue={orderContext.setFirstName}
                    required
                  />
                </Col>
                <Col xs="6">
                  <Input
                    name="last-name"
                    label="Last Name"
                    value={orderContext.last_name}
                    setValue={orderContext.setLastName}
                    required
                  />
                </Col>
              </Row>
              <Input
                name="billing-adress"
                label="Billing Adress"
                value={orderContext.adress}
                setValue={orderContext.setAdress}
                required
              />
              <Row>
                <Col xs="6">
                  <Input
                    name="city"
                    label="City"
                    value={orderContext.city}
                    setValue={orderContext.setCity}
                    required
                  />
                </Col>
                <Col xs="6">
                  <Input
                    name="zip-code"
                    label="Zip code"
                    value={orderContext.zip}
                    setValue={orderContext.setZipCode}
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
