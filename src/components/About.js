import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition } from "@react-spring/web";
import "../styles/About.css";

function About() {
  return (
    <Container fluid className="aboutCon">
      <Row className="aboutRow">
        <Col className="d-flex justify-content-center flex-wrap profile">
          <Image
            roundedCircle
            src={process.env.PUBLIC_URL + "/assets/images/me.jpg"}
            className="myPic"
            alt="Nam Bui"
          />
          <h2>
            Hi! My name is Nam and I am a full-stack developer and chemical
            engineer.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
