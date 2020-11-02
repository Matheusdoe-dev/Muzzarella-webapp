import React, { useEffect, useState } from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled-components
import { BreadcrumbsWrapper, BreadcrumbsItem } from "./styles";
// hooks
import useBreadcrumbs from "../../hooks/breadcrumbs";

const Breadcrumbs = () => {
  useBreadcrumbs();

  return (
    <BreadcrumbsWrapper>
      <Container>
        <Row>
          <Col xs="12">
            <BreadcrumbsItem data-anime="breadcrumbs" to="/order/location">
              Location
            </BreadcrumbsItem>
            <BreadcrumbsItem
              data-anime="breadcrumbs"
              to="/order/choose"
              className="inactive"
            >
              Customize
            </BreadcrumbsItem>
            <BreadcrumbsItem
              data-anime="breadcrumbs"
              to="/order/review"
              className="inactive"
            >
              Review
            </BreadcrumbsItem>
            <BreadcrumbsItem
              data-anime="breadcrumbs"
              to="/order/signin"
              className="inactive"
            >
              Sign in
            </BreadcrumbsItem>
            <BreadcrumbsItem
              data-anime="breadcrumbs"
              to="/order/checkout"
              className="inactive"
            >
              Checkout
            </BreadcrumbsItem>
          </Col>
        </Row>
      </Container>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
