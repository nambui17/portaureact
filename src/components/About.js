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
    <>
      <Row className="aboutRow">
        <Col className="d-flex justify-content-center flex-wrap">
          <AnimatedImage
            style={dropDown}
            roundedCircle
            src={process.env.PUBLIC_URL + "/assets/images/me.jpg"}
            className="myPic"
            alt="Nam Bui"
          />
          <Container fluid>
            <Card className="profile">
              <Card.Title><h1>Nam Bui</h1></Card.Title>
              <Card.Text className="aboutText text-center">
                I am a chemical engineer using full-stack development to create
                applications, and coding experience to create applications,
                specifically for the medical device field. I have been working for Steris
                for three years and have developed multiple patents and inventions for medical
                sterilants, including code in Python and C++ that have been used for research and
                development. I also work using javascript, html, and css.
              </Card.Text>
            </Card>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default About;
