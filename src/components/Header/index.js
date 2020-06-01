import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import brandImg from "../../assets/icons/brand.svg";

const Index = () => {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col xs="4">
              <Link to="/" className="brand">
                <img src={brandImg} href="/" alt="Muzzarella" />
              </Link>
            </Col>
            <Col xs="8">
              <nav>
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="">Menu</Link>
                  </li>
                  <li>
                    <Link to="">About</Link>
                  </li>
                  <li>
                    <Link to="">FAQ</Link>
                  </li>
                  <li>
                    <Link to="">Order</Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Index;
