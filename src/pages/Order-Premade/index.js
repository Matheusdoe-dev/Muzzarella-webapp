import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
import PremadeOption from "../../components/Premade-option";
// styled-components
import { ChoosePremadeWrapper } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import pageTitleImg from "../../assets/imgs/order/bg-page-choose-premade.jpg";
import premadeMargherita from "../../assets/imgs/order/premade-margherita.jpg";
import premadeCalzone from "../../assets/imgs/order/premade-calzone.jpg";
import premadeFourCheeses from "../../assets/imgs/order/premade-four-cheeses.jpg";
import premadeMarinara from "../../assets/imgs/order/premade-marinara.jpg";
import premadeMozzarella from "../../assets/imgs/order/premade-mozzarella.jpg";
import premadePepperoni from "../../assets/imgs/order/premade-pepperoni.jpg";
import premadePomodoro from "../../assets/imgs/order/premade-pomodoro.jpg";
import premadeVegetarian from "../../assets/imgs/order/premade-vegetarian.jpg";
// hooks
import useOrderHook from "../../hooks/order";

const ChoosePremade = () => {
  const { handleItems, handleChecked } = useOrderHook();

  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Choose a premade option" />
      <Breadcrumbs />

      <ChoosePremadeWrapper>
        <Container>
          <Row>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Margherita"
                name="margherita"
                image={premadeMargherita}
                description="Tomato, olive oil, mozzarella cheese and basil"
                value="Margherita"
                checked={handleChecked()}
                onChange={(event) =>
                  handleItems(event, event.currentTarget.value, "Premade")
                }
              />
            </Col>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Mozzarella"
                name="mozzarella"
                image={premadeMozzarella}
                description="Tomato, mozzarella cheese, oregano and black olives"
                value="Mozzarella"
                onChange={handleItems}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Pepperoni"
                name="pepperoni"
                image={premadePepperoni}
                description="Tomato, mozzarella cheese, pepperoni, salami, slices and
                black olives"
                value="Pepperoni"
                onChange={handleItems}
              />
            </Col>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Four Cheeses"
                name="fourcheeses"
                image={premadeFourCheeses}
                description="Tomato, mozzarella cheese, gorgonzola, parmesan, provolone,
                catupiry and black olives"
                value="Four Cheeses"
                onChange={handleItems}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Pomodoro"
                name="pomodoro"
                image={premadePomodoro}
                description="Tomato, mozzarella cheese and grated parmesan, garlic and
                black olives"
                value="Pomodoro"
                onChange={handleItems}
              />
            </Col>
            <Col xs="12" sm="6">
              <PremadeOption
                alt="Marinara"
                name="marinara"
                image={premadeMarinara}
                description="Tomato, olive oil, oregano and garlic"
                value="Marinara"
                onChange={handleItems}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12 " sm="6">
              <PremadeOption
                alt="Calzone"
                name="calzone"
                image={premadeCalzone}
                description="Ricotta cheese, special mozzarella cheese, olive oil and
                salami"
                value="Calzone"
                onChange={handleItems}
              />
            </Col>
            <Col xs="12 " sm="6">
              <PremadeOption
                style={{ marginBottom: 0 }}
                alt="Vegetarian"
                name="vegetarian"
                image={premadeVegetarian}
                description="Stewed peppers, zucchini, artichoke hearts and spinach"
                value="Vegetarian"
                onChange={handleItems}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm={{ span: 4, offset: 4 }}>
              <Button
                to="/order/review"
                background="var(--base-color)"
                color="var(--support-color-1)"
                style={{ marginTop: "var(--gap-md)" }}
              >
                Confirm order
              </Button>
            </Col>
          </Row>
        </Container>
      </ChoosePremadeWrapper>

      <Footer />
    </>
  );
};

export default ChoosePremade;
