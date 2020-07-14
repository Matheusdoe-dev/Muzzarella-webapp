import React from "react";
// components
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavMenu from "react-bootstrap/Nav";
// imgs
import brandImg from "../../assets/icons/brand.svg";
// styled-components
import {
  Nav,
  Dropdown,
  NavItem,
  NavItemLink,
  NavToggle,
  HeaderContainer,
} from "./styles";
import { Container } from "../../styles/objects/container";

const Index = () => {
  return (
    <>
      <HeaderContainer>
        <Container fluid>
          <Row>
            <Col xs="12">
              <Nav expand="lg" sticky="top">
                <NavbarBrand>
                  <Link to="/">
                    <img src={brandImg} alt="Mozzarella" />
                  </Link>
                </NavbarBrand>
                <NavToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <NavMenu>
                    <NavItem>
                      <NavItemLink to="/menu">Menu</NavItemLink>
                    </NavItem>
                    <Dropdown title="About" id="collasible-nav-dropdown">
                      <Dropdown.Item>
                        <Link to="/aboutus">About us</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/aboutmuzzarella">About Mozarrarella</Link>
                      </Dropdown.Item>
                    </Dropdown>
                    <NavItem>
                      <NavItemLink to="/faq">FAQ</NavItemLink>
                    </NavItem>
                    <NavItem>
                      <NavItemLink to="/order/location">Order</NavItemLink>
                    </NavItem>
                  </NavMenu>
                </NavbarCollapse>
              </Nav>
            </Col>
          </Row>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Index;
