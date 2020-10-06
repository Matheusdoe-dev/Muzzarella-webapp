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
import { OrderSignInWrapper, Error } from "./styles";
import { SubmitButton } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-account.jpg";
// hooks
import useCreateAccountHook from "../../hooks/create-account";

const OrderSignIn = () => {
  const {
    confirmEmail,
    confirmPassword,
    email,
    name,
    password,
    setConfirmEmail,
    setConfirmPassword,
    setEmail,
    setName,
    setPassword,
    handleCreateAccount,
    errorEmail,
    errorPassword,
  } = useCreateAccountHook();

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Sign in" />
      <Breadcrumbs />

      <OrderSignInWrapper>
        <Container>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <form onSubmit={handleCreateAccount} name="signin" id="signin">
                <Input
                  type="name"
                  name="name"
                  label="Name"
                  value={name}
                  setValue={setName}
                />
                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                  value={email}
                  setValue={setEmail}
                  error={errorEmail}
                />
                <Input
                  type="email"
                  name="confirm-email"
                  label="Confirm your E-mail"
                  value={confirmEmail}
                  setValue={setConfirmEmail}
                  error={errorEmail}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  setValue={setPassword}
                  error={errorPassword}
                />
                <Input
                  type="password"
                  name="confirm-password"
                  label="Confirm your Password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  error={errorPassword}
                />
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <SubmitButton
                form="signin"
                type="submit"
                color="var(--support-color-1)"
                background="var(--base-color)"
              >
                Create your account
              </SubmitButton>
            </Col>
          </Row>
        </Container>
      </OrderSignInWrapper>

      <Footer />
    </>
  );
};

export default OrderSignIn;
