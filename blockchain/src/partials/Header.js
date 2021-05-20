import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown, Form,  FormControl, Button } from 'react-bootstrap'
import './css/Header.css'
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

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
    <>
        <Navbar className="mov" bg="dark" expand="lg" sticky="top">
          <Navbar.Brand className="brand" href="#home">The Dungeon Crawler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" inline>
              <Nav.Link onClick={() => scroller.scrollTo('hero', {
                smooth: true,
                offset: -70,
                duration: 1000 })} 
                className="link" href="#hero">Welcome</Nav.Link>
              <Nav.Link onClick={() => scroller.scrollTo('descr', {
                smooth: true,
                offset: -70,
                duration: 1000,
                })} 
                className="link" href="#descr">Game Experiences</Nav.Link>
              <Nav.Link className="link" href="#link">Features</Nav.Link>
              <Nav.Link className="link" href="#link">Contact Us</Nav.Link>
              <Link to="/selection">
                <Button variant="outline-primary">Login using Metamask</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default Header;