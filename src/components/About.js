import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "@react-spring/web";
import "../styles/About.css";

function About() {
  const AnimatedImage = animated(Image);
  const dropDown = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      mass: 7,
      tension: 200,
    },
  });
  return (
    <Container fluid className="aboutCon">
      <Row className="aboutRow">
        <Col className="d-flex justify-content-center flex-wrap profile">
          <AnimatedImage
            style={dropDown}
            roundedCircle
            src={process.env.PUBLIC_URL + "/assets/images/me.jpg"}
            className="myPic"
            alt="Nam Bui"
          />
          <Container fluid>
            <h2>
              Hi! My name is Nam and I am a full-stack developer and chemical
              engineer.
            </h2>
            <p>I am a chemical engineer using full-stack development to create applications, and coding experience to create applications, specifically for the medical device field.</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
