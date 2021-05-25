import React, { useState, useEffect } from 'react';
// import {Navbar, Nav, NavDropdown, Form,  FormControl, Button, Container } from 'react-bootstrap'
import './css/Chest.css'
import AOS from 'aos'
import "aos/dist/aos.css";
// import { Link } from 'react-router-dom';
// import Death from '../assets/elf.png'
// import { Image, Button } from 'react-bootstrap'



function Chest() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="description" id="descr">
      <div
        className="row1"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="side" data-aos="fade-up" data-aos-duration="3000">
          <div className="welcome3">Claim Chests</div>
          <p className="desc3">
            Chests are sources of Dungeon Coins ($DGN ERC-20 tokens) which you
            can find around in our maps, and claim them by beating all monsters
            that come your way. You can use them to Redeem NFTs and reward
            artists for your favourite artwork.
          </p>
        </div>
        <div
          className="main"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className="l-img" src="https://ipfs.io/ipfs/QmTaCLxUTF3FH22ueupBHUQbQBxWppW99x13TPqPLybxZE?filename=chest.gif" alt="Chest" />
        </div>
      </div>
      <div
        className="row2"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="main"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="fakeimg">
            <img className="l-img" src="https://ipfs.io/ipfs/QmZNV8P9XywyMtGSa4jcdjcabLsTQCtx5Cn8d1hFhUPZ7D?filename=nft.gif" alt="NFT" />
          </div>
        </div>
        <div className="side" data-aos="fade-up" data-aos-duration="3000">
          <div className="welcome1">Redeem NFTs</div>
          <p className="desc1">
            Non-Fungible Tokens (NFTs) are virtual tokens minted on the
            blockchain for digital scarcity, security, and authenticity. They
            are unique, indivisible, and non-interchangeable - allowing true
            digital ownership of in-game assets. We use Chainlink VRFs to
            generate randomness for the NFTs
          </p>
        </div>
      </div>
      <div
        className="row3"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="side" data-aos="fade-up" data-aos-duration="3000">
          <div className="welcome2">DAO & Art Gallery</div>
          <p className="desc2">
            Artists and NFT creators can create their favourite characters,
            story/maps. These are listed on our Art Gallery, where NFT curators,
            game players can reward them by up-voting their favourite artwork
            using $DGN tokens. The created characters/maps may be used as game
            assets in the future releases.
          </p>
        </div>
        <div
          className="main"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="fakeimg">
            <img className="l-img" src="https://ipfs.io/ipfs/Qmdr6tgjCbDexWoZsE9qtJpGEWGR6ttCdtBtManUERfVcd?filename=dao.gif" alt="Art Gallery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chest;

{/* <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/gkAA7d66yItLmr2knz" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> */}