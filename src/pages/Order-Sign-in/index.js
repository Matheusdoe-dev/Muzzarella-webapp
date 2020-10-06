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
// hooks
import useAuthentication from "../../hooks/authentication";

const OrderSignIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleAuthenticationSubmit,
  } = useAuthentication();

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
                name="signin"
                id="signin"
                onSubmit={handleAuthenticationSubmit}
              >
                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                  value={email}
                  setValue={setEmail}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  setValue={setPassword}
                />
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
                to="/order/create-account"
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
