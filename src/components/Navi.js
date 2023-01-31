import React, {useState} from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';

function Navi(props) {
  const styles = {
    headerBox: {
      fontSize: "48px",
      background: "#6610F2",
    },
    links: {
      fontSize: '16px',
      textDecoration: 'none'
    }
  };
  const links = [{id: 1, text:"about"}, {id: 2, text:"work"}, {id: 3, text:"resume"}, {id: 4, text:"contact"}];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Navbar style={styles.headerBox} expand="xl">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-light">Nam Bui</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-flex align-items-center">
            {links.map((link) => (
              <Nav.Link 
              key={link.id} 
              href={`#${link.text}`} 
              onClick={() => props.pageSwitchHandler(link.text)}
              style={styles.links}
              className={props.activePage === link.text ? "navlinks link-warning" : "navlinks link-light"}
              >
                {capitalizeFirstLetter(link.text)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
