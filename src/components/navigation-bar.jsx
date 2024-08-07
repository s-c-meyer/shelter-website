import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from "react-router-dom";

export default function NavigationBar () {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container className='barlow-regular'>
        <Navbar.Brand className='nav-logo-container' as={Link} to="/">
          <img
            src='../src/assets/navbar_logo.png'
            alt='Manna Shelter Logo'
            className='d-flex nav-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link className='nav-link' as={Link} to="/board">Board of Directors</Nav.Link>
            <Nav.Link className='nav-link' as={Link} to="/gallery">Gallery</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/donate" eventKey={2}>
              Donate to Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}