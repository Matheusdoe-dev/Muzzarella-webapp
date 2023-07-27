import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// imgs
import slidesImg1 from "../../assets/imgs/slides-image-1.jpg";
import slidesImg2 from "../../assets/imgs/slides-image-2.jpg";
import slidesImg3 from "../../assets/imgs/slides-image-3.jpg";
import slidesImg4 from "../../assets/imgs/slides-image-4.jpg";
// styled-components
import { SlidesWrapper } from "./styles";

const Slides = () => {
  return (
    <>
      <SlidesWrapper>
        <Container>
          <Row>
            <Col xs="12" sm="3">
              <img src={slidesImg1} alt="" />
            </Col>
            <Col xs="12" sm="3">
              <img src={slidesImg2} alt="" />
            </Col>
            <Col xs="12" sm="3">
              <img src={slidesImg3} alt="" />
            </Col>
            <Col xs="12" sm="3">
              <img src={slidesImg4} alt="" />
            </Col>
          </Row>
        </Container>
      </SlidesWrapper>
    </>
  );
};

export default Slides;
