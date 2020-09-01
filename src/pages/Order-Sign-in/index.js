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
import { OrderSignInWrapper } from "./styles";
import { SubmitButton, Button } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-account.jpg";

const OrderSignIn = () => {
  const history = useHistory();

  const handleLocationValidation = () => {
    history.push("/order/checkout");
  };

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Sign in" />
      <Breadcrumbs />

      <OrderSignInWrapper>
        <Container>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <form
                onSubmit={handleLocationValidation}
                name="signin"
                id="signin"
              >
                <Input type="email" name="email" label="E-mail" />
                <Input type="password" name="password" label="Password" />
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm={{ span: 3, offset: 3 }}>
              <SubmitButton
                form="signin"
                type="submit"
                color="var(--support-color-1)"
                background="var(--base-color)"
              >
                Sign in
              </SubmitButton>
            </Col>
            <Col xs="12" sm="3">
              <Button
                background="var(--support-color-1)"
                color="var(--support-color-4)"
                to="/order/signup"
              >
                Create a account
              </Button>
            </Col>
          </Row>
        </Container>
      </OrderSignInWrapper>

      <Footer />
    </>
  );
};

export default OrderSignIn;
