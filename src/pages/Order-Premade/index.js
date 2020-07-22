import React from "react";
// components
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Breadcrumbs from "../../components/Breadcrumbs/index";
// styled-components
import { ChoosePremadeWrapper, PremadeOption } from "./styles";
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

const ChoosePremade = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Choose a premade option" />
      <Breadcrumbs />

      <ChoosePremadeWrapper>
        <Container>
          <Row>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeMargherita} alt="Margherita" />
                <label>
                  <input type="checkbox" id="margherita" name="margherita" />
                  <span></span>
                </label>
                <div>
                  <h4>Margherita</h4>
                  <p>Tomato, olive oil, mozzarella cheese and basil</p>
                </div>
              </PremadeOption>
            </Col>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeMozzarella} alt="Mozzarella" />
                <label>
                  <input type="checkbox" id="mozzarella" name="mozzarella" />
                  <span></span>
                </label>
                <div>
                  <h4>Mozzarella</h4>
                  <p>Tomato, mozzarella cheese, oregano and black olives</p>
                </div>
              </PremadeOption>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <PremadeOption>
                <img src={premadePepperoni} alt="Pepperoni" />
                <label>
                  <input type="checkbox" id="pepperoni" name="pepperoni" />
                  <span></span>
                </label>
                <div>
                  <h4>Pepperoni</h4>
                  <p>
                    Tomato, mozzarella cheese, pepperoni, salami, slices and
                    black olives
                  </p>
                </div>
              </PremadeOption>
            </Col>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeFourCheeses} alt="Four Cheeses" />
                <label>
                  <input type="checkbox" id="fourcheeses" name="fourcheeses" />
                  <span></span>
                </label>
                <div>
                  <h4>Four Cheeses</h4>
                  <p>
                    Tomato, mozzarella cheese, gorgonzola, parmesan, provolone,
                    catupiry and black olives
                  </p>
                </div>
              </PremadeOption>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <PremadeOption>
                <img src={premadePomodoro} alt="Pomodoro" />
                <label>
                  <input type="checkbox" id="pomodoro" name="pomodoro" />
                  <span></span>
                </label>
                <div>
                  <h4>Pomodoro</h4>
                  <p>
                    Tomato, mozzarella cheese and grated parmesan, garlic and
                    black olives
                  </p>
                </div>
              </PremadeOption>
            </Col>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeMarinara} alt="Marinara" />
                <label>
                  <input type="checkbox" id="marinara" name="marinara" />
                  <span></span>
                </label>
                <div>
                  <h4>Marinara</h4>
                  <p>Tomato, olive oil, oregano and garlic</p>
                </div>
              </PremadeOption>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeCalzone} alt="Calzone" />
                <label>
                  <input type="checkbox" id="calzone" name="calzone" />
                  <span></span>
                </label>
                <div>
                  <h4>Calzone</h4>
                  <p>
                    Ricotta cheese, special mozzarella cheese, olive oil and
                    salami
                  </p>
                </div>
              </PremadeOption>
            </Col>
            <Col xs="6">
              <PremadeOption>
                <img src={premadeVegetarian} alt="Vegetarian" />
                <label>
                  <input type="checkbox" id="vegetarian" name="vegetarian" />
                  <span></span>
                </label>
                <div>
                  <h4>Vegetarian</h4>
                  <p>Stewed peppers, zucchini, artichoke hearts and spinach</p>
                </div>
              </PremadeOption>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <Button
                to="/order/review"
                background="var(--base-color)"
                color="var(--support-color-1)"
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
