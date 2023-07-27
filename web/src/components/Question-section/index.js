import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../Input";
import Textarea from "../Textarea";
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

                <Input name="name" label="Name" />
                <Input type="email" name="email" label="E-mail" />
                <Textarea name="message" label="Send your question" />

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
