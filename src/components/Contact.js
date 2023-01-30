import React, {useState} from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useSpring, useTransition } from "@react-spring/web";
import "../styles/Contact.css";

function Contact() {
    const [name, setName] = useState("");
    function isEmail() {

    }
  return (
    <Container fluid className="align-items-center">
      <Row className="contactRow">
        <Col className="d-flex justify-content-center flex-wrap">
            <h1>Contact Me</h1>
          <Form className="contactInfo" validated={true}>
            <Form.Group className="m-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required/>
              <small className="invalid-feedback">Please fill out this field</small>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required placeholder="name@example.com"/>
              <small className="invalid-feedback">Please enter valid email address</small>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label>Comments</Form.Label>
              <textarea className="form-control is-invalid" rows={4} required></textarea>
              <small className="invalid-feedback">Please fill out this field</small>
            </Form.Group>
            <Button variant="success" className="mb-3">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
