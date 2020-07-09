import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled
import { PageTitleWrapper } from "./styles";

const PageTitle = ({ title, background }) => {
  return (
    <PageTitleWrapper bg={background}>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col xs="12">
            <h3>{title}</h3>
          </Col>
        </Row>
      </Container>
    </PageTitleWrapper>
  );
};

export default PageTitle;
