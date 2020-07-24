import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled-components
import { CTAWrapper } from "./styles";
import { Button } from "../../styles/objects/button";

const CTASection = () => {
  return (
    <CTAWrapper>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs="12" sm="9">
            <h3>Order your pizza now!</h3>
            <p>
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </p>
          </Col>
          <Col xs="12" sm="3">
            <Button
              to="/order/location"
              color="var(--support-color-1)"
              background="var(--base-color)"
            >
              Order Now
            </Button>
          </Col>
        </Row>
      </Container>
    </CTAWrapper>
  );
};

export default CTASection;
