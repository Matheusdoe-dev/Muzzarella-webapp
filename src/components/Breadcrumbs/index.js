import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled-components
import { BreadcrumbsWrapper, BreadcrumbsItem } from "./styles";

const Breadcrumbs = () => {
  const handleActiveBreadcrumb = (event) => {
    const breadcrumbs = document.querySelectorAll("a");
    breadcrumbs.forEach((breadcrumb) => {
      breadcrumb.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  };

  return (
    <BreadcrumbsWrapper>
      <Container>
        <Row>
          <Col xs="12">
            <BreadcrumbsItem
              onClick={handleActiveBreadcrumb}
              to="/order/location"
              className="active"
            >
              Location
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={handleActiveBreadcrumb}
              to="/order/choose"
            >
              Customize your order
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={handleActiveBreadcrumb}
              to="/order/review"
            >
              Review order
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={handleActiveBreadcrumb}
              to="/order/signup"
            >
              Sign up
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={handleActiveBreadcrumb}
              to="/order/customize"
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
