import React from "react";
import { useHistory } from "react-router-dom";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { OrderCustomizeWrapper } from "./styles";
import { SubmitButton } from "../../styles/objects/button";
import CheckboxList from "../../components/Checkbox-List";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-choose-premade.jpg";

const OrderCustomize = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Choose a premade option" />
      <Breadcrumbs />

      <OrderCustomizeWrapper onSubmit={() => history.push("/order/review")}>
        <Container>
          <Row>
            <Col xs="12">
              <h4>Pasta</h4>
            </Col>
            <CheckboxList
              name="pasta"
              type="radio"
              options={[
                { name: "slim", label: "Slim" },
                { name: "average", label: "Average" },
                { name: "thick", label: "Thick" },
              ]}
            />
          </Row>
          <Row>
            <Col xs="12">
              <h4>Size</h4>
            </Col>
            <CheckboxList
              name="size"
              type="radio"
              options={[
                { name: "small", label: "Small" },
                { name: "medium", label: "Medium" },
                { name: "big", label: "Big" },
                { name: "family", label: "Family" },
              ]}
            />
          </Row>
          <Row>
            <Col xs="12">
              <h4>Sauce</h4>
            </Col>
            <CheckboxList
              name="sauce"
              type="checkbox"
              options={[
                { name: "traditional-tomato", label: "Traditional Tomato" },
                { name: "gorgonzola-sauce", label: "Gorgonzola Sauce" },
                { name: "parisian-sauce", label: "Parisian Sauce" },
              ]}
            />
          </Row>
          <Row>
            <Col xs="12">
              <h4>Pizza Topping</h4>
            </Col>
            <CheckboxList
              name="topping"
              type="checkbox"
              options={[
                { name: "mozzarella", label: "Mozzarella" },
                { name: "parmesan", label: "Parmesan" },
                { name: "provolone", label: "Provolone" },
                { name: "catupiry", label: "Catupiry" },
                { name: "tomato", label: "Tomato" },
                { name: "oregano", label: "Oregano" },
                { name: "olives", label: "Olives" },
                { name: "onion", label: "Onion" },
                { name: "ham", label: "Ham" },
                { name: "pepperoni", label: "Pepperoni" },
                { name: "sausage", label: "Sausage" },
                { name: "black-olives", label: "Black olives" },
                { name: "garlic", label: "Garlic" },
                { name: "olive-oil", label: "Olive oil" },
                { name: "anchovies", label: "Anchovies" },
              ]}
            />
          </Row>
          <Row>
            <Col xs="12">
              <SubmitButton
                width="372px"
                background="var(--base-color)"
                color="var(--support-color-1)"
              >
                Confirm order
              </SubmitButton>
            </Col>
          </Row>
        </Container>
      </OrderCustomizeWrapper>

      <Footer />
    </>
  );
};

export default OrderCustomize;
