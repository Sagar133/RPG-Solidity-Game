import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown, Form,  FormControl, Button } from 'react-bootstrap'
import './css/HeroHome.css'
// import { Link } from 'react-router-dom';
import sample from '../assets/1.mp4';

function HeroHome() {

  return (
    <div className="video">
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        <div class="tag">
            <div className="welcome">WELCOME TO</div>
            <div className="game">THE DUNGEON CRAWLER</div>
            <div className="desc">Play, Create your own Artwork and get Rewarded with NFTs</div>
            <div className="sign-up">Login with MetaMask</div>        
        </div>
        
    </div>
  );
}

export default HeroHome;