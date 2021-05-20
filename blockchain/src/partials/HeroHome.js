import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./css/HeroHome.css";
import { Link } from 'react-router-dom';

function HeroHome() {
  return (
    <div className="v-landing" id="hero">
      <div className="video">
        <video className="videoTag" autoPlay loop muted>
          <source
            src="https://ipfs.io/ipfs/QmTAznyH583xUgEyY5zdrPB2LSGY7FUBPDddWKj58GmBgp?filename=1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="tag">
        <div className="welcome">WELCOME TO</div>
        <div className="game">THE DUNGEON CRAWLER</div>
        <div className="desc">
          Play, Create your own Artwork and get Rewarded with NFTs
        </div>
        <Link to="/selection">
        <div className="sign-up">Login with MetaMask</div>
        </Link>
      </div>
    </div>
  );
}

export default HeroHome;
