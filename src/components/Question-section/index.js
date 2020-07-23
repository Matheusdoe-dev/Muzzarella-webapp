import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// styled-components
import { QuestionWrapper } from "./styles";
import { SubmitButton } from "../../styles/objects/button";

const QuestionSection = () => {
  return (
    <>
      <QuestionWrapper>
        <Container>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <form>
                <h3>
                  Another Question ? <br />
                  Contact Us!
                </h3>

                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  required
                />

                <SubmitButton
                  type="submit"
                  color="var(--support-color-1)"
                  background="var(--base-color)"
                >
                  Submit
                </SubmitButton>
              </form>
            </Col>
          </Row>
        </Container>
      </QuestionWrapper>
    </>
  );
};

export default QuestionSection;
