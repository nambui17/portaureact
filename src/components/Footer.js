import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useSpring, animated} from '@react-spring/web';

export default function Footer() {
    const styles = {
        footerBox: {
          background: '#E6C229',
        },
        footer: {
            minHeight: '5vh'
        }
      }
    const fadeIn = useSpring(
        {
            from: {opacity: 0},
            to: {opacity: 1}
        }
    )
    return(
        <Container fluid style={styles.footerBox} className="fixed-bottom">
            <Row style={styles.footer} className="d-flex justify-content-center align-items-center">
                <Col xs={12} md={4} className="d-flex justify-content-center"><a>Contact Me</a></Col>
                <Col xs={12} md={4} className="d-flex justify-content-center"><a>GitHub</a></Col>
                <Col xs={12} md={4} className="d-flex justify-content-center"><animated.a style={fadeIn}>Email:</animated.a></Col>
            </Row>
        </Container>
    )
}