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
import { SubmitButton } from "../../styles/objects/button";
import { OrderLocationWrapper } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-location.jpg";

const OrderLocation = () => {
  const history = useHistory();

  const handleLocationValidation = () => {
    history.push("/order/choose");
  };

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Check your location" />

      <Container>
        <Row>
          <Col>
            <Breadcrumbs />
          </Col>
        </Row>
      </Container>

      <OrderLocationWrapper>
        <Container>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <form onSubmit={handleLocationValidation}>
                <Input name="adress" label="Your location" />

                <SubmitButton
                  type="submit"
                  color="var(--support-color-1)"
                  background="var(--base-color)"
                >
                  Check
                </SubmitButton>
                <span>
                  We need your location to see if matches with our delivery area
                </span>
              </form>
            </Col>
          </Row>
        </Container>
      </OrderLocationWrapper>

      <Footer />
    </>
  );
};

export default OrderLocation;
