import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// styled-components
import { AccordionListWrapper } from "./styles";

const AccordionList = () => {
  return (
    <>
      <AccordionListWrapper>
        <Container>
          <Row>
            <Col xs="12" sm={{ span: 6, offset: 3 }}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h4>Where is the delivery area ?</h4>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h4>How can you get in touch ?</h4>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      <h4>How many ways can you pay ?</h4>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      <h4>What time the pizzeria will be open ?</h4>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </AccordionListWrapper>
    </>
  );
};

export default AccordionList;
