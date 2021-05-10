import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown, Form,  FormControl, Button } from 'react-bootstrap'
import './css/Header.css'
// import { Link } from 'react-router-dom';

function Header() {

//   const [top, setTop] = useState(true);

//   // detect whether user has scrolled the page down by 10px 
//   useEffect(() => {
//     const scrollHandler = () => {
//       window.pageYOffset > 10 ? setTop(false) : setTop(true)
//     };
//     window.addEventListener('scroll', scrollHandler);
//     return () => window.removeEventListener('scroll', scrollHandler);
//   }, [top]);  

  return (
    <div className="screen">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand className="brand" href="#home">The Dungeon Crawler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="link" href="#home">Welcome</Nav.Link>
              <Nav.Link className="link" href="#link">Game Experiences</Nav.Link>
              <Nav.Link className="link" href="#link">Features</Nav.Link>
              <Nav.Link className="link" href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;