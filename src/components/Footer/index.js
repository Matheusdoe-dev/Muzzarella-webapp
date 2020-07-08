import React from "react";
// components
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// img
import brandImg from "../../assets/icons/brand.svg";
// styled-components
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/aboutmuzzarella">About Muzzarella</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="4">
            <h4>Our contacts</h4>
            <ul>
              <li>- 029 99999-9999</li>
              <li>- contact@muzzarella.co.uk</li>
            </ul>
          </Col>
          <Col xs="12" sm="4">
            <img src={brandImg} alt="Muzzarella" />
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
