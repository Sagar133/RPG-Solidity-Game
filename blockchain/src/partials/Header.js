import React, { useContext } from 'react';
import {Navbar, Nav, Button } from 'react-bootstrap'
import './css/Header.css'
import Web3 from 'web3';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import TropyChar from '../abis/TrophyChar.json'
import DungeonToken from '../abis/DungeonToken.json'
import getWeb3 from "../utils/web3";
import { UserContext } from "../utils/UserContext"; 
import Avatar from "./Avatar/Avatar"

export default function Header() {

  const { user, setUser } = useContext(UserContext);
  const connectToMetamask = async () => {
    const web3 = await getWeb3();
    console.log(web3);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setUser(accounts);
  };

  

  
  return (
    <>
        <Navbar className="mov" bg="dark" expand="lg" sticky="top">
          <Navbar.Brand className="brand" href="#home">The Dungeon Crawler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" inline>
            {user ? (
                  <Avatar address={user} />
                ): (
                  <Button onClick={connectToMetamask} variant="outline-primary">Connect to wallet</Button>
                )}
              <Nav.Link 
              onClick={() => 
                scroller.scrollTo('hero', {
                  smooth: true,
                  offset: -70,
                  duration: 1000 })} 
                className="link" href="#hero">Home</Nav.Link>
              <Nav.Link onClick={() => scroller.scrollTo('descr', {
                smooth: true,
                offset: -70,
                duration: 1000,
                })} 
                className="link" href="#descr">Game Experiences</Nav.Link>
              {/* <Nav.Link className="link" href="#link">Features</Nav.Link> */}
              <Nav.Link className="link" href="#link">Contact Us</Nav.Link>
              {/* <Link to="/selection"> */}
                {/* {user ? (
                  <Avatar address={user} />
                ): (
                  <Button onClick={connectToMetamask} variant="outline-primary">Connect to wallet</Button>
                )} */}
                
              {/* </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

