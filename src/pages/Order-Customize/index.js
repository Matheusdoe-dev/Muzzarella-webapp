import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { OrderCustomizeWrapper, Checkmark } from "./styles";
import { SubmitButton } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-choose-premade.jpg";

const OrderCustomize = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Choose a premade option" />
      <Breadcrumbs />

      <OrderCustomizeWrapper>
        <Container>
          <Row>
            <Col xs="12">
              <h4>Pasta</h4>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="slim">
                  <input type="radio" id="slim" name="pasta" checked />
                  <span></span>
                  <p>Slim</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="average">
                  <input type="radio" id="average" name="pasta" />
                  <span></span>
                  <p>Average</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="thick">
                  <input type="radio" id="thick" name="pasta" />
                  <span></span>
                  <p>Thick</p>
                </label>
              </Checkmark>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <h4>Size</h4>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="small">
                  <input type="radio" id="small" name="size" checked />
                  <span></span>
                  <p>Small</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="medium">
                  <input type="radio" id="medium" name="size" />
                  <span></span>
                  <p>Medium</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="big">
                  <input type="radio" id="big" name="size" />
                  <span></span>
                  <p>Big</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="family">
                  <input type="radio" id="family" name="size" />
                  <span></span>
                  <p>Family</p>
                </label>
              </Checkmark>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <h4>Sauce</h4>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="traditional-tomato">
                  <input
                    type="checkbox"
                    id="traditional-tomato"
                    name="sauce"
                    checked
                  />
                  <span className="checkbox"></span>
                  <p>Traditional Tomato</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="gorgonzola-sauce">
                  <input type="checkbox" id="gorgonzola-sauce" name="sauce" />
                  <span className="checkbox"></span>
                  <p>Gorgonzola Sauce</p>
                </label>
              </Checkmark>
            </Col>
            <Col xs="12" sm="3">
              <Checkmark>
                <label for="parisian-sauce">
                  <input type="checkbox" id="parisian-sauce" name="sauce" />
                  <span className="checkbox"></span>
                  <p>Parisian Sauce</p>
                </label>
              </Checkmark>
            </Col>
          </Row>
        </Container>
      </OrderCustomizeWrapper>

      <Footer />
    </>
  );
};

export default OrderCustomize;
