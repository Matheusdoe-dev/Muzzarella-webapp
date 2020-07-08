import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled-components
import { CTAWrapper, CtaButton } from "./styles";

const CTASection = () => {
  return (
    <CTAWrapper>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs="12" sm="9">
            <h3>Order your pizza now!</h3>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </p>
          </Col>
          <Col xs="12" sm="3">
            <CtaButton>Order Now</CtaButton>
          </Col>
        </Row>
      </Container>
    </CTAWrapper>
  );
};

export default CTASection;
