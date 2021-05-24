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
// import React, { Component } from 'react';
// import {Navbar, Nav, Button } from 'react-bootstrap'
// import './css/Header.css'
// import Web3 from 'web3';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import TropyChar from '../abis/TrophyChar.json'
// import DungeonToken from '../abis/DungeonToken.json'
// import getWeb3 from "../utils/web3";
// import { UserContext } from "../utils/UserContext"; 
// import Avatar from "./Avatar/Avatar"


// class Header extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isRewarded: false,
//       isMinting: false,
//       isLoggedIn: false,
//       // items: [], 
//       account: '',
//       contract: null,
//       usersNftCount: 0,
//       trophies: [],
//       loading: true
//     };
//     this.loadWeb3();
//     this.loadBlockchainData();
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert("Non ethereum browser detected. You should consider trying Metamask")
//     }
//   }

//   async loadBlockchainData() {
//     const web3 = window.web3
//     const accounts = await web3.eth.getAccounts()
//     this.setState({ account: accounts[0] })

//     const networkId = await web3.eth.net.getId()
//     const networkData = TropyChar.networks[networkId]
//     if (networkData) {
//       const abi = TropyChar.abi;
//       const address = networkData.address
//       const contract = new web3.eth.Contract(abi, address)
//       const contract2 = new web3.eth.Contract(DungeonToken.abi, DungeonToken.networks[networkId].address)
//       //console.log(this.state.account)
//       this.setState({ contract })
//       this.setState({ contract2 })


//       const usersNftCount = await contract.methods.usersNftCount(this.state.account).call()

//       this.setState({ usersNftCount: Number(usersNftCount.toString()) })

//       console.log(usersNftCount.toString());

//       for (var i = 1; i <= this.state.usersNftCount; i++) {
//         const trophy = await contract.methods.usersNft(this.state.account, i).call()
//         //console.log(trophy);
//         this.setState({
//           trophies: [...this.state.trophies, trophy]
//         })
//       }

//       //console.log('users trophies', this.state.usersNftCount, this.state.trophies)
//     } else {
//       window.alert('Smart contract not deployed to the detected network')
//     }
//   }


//   render() {

  

  
//   return (
//     <>
//         <Navbar className="mov" bg="dark" expand="lg" sticky="top">
//           <Navbar.Brand className="brand" href="#home">The Dungeon Crawler</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto" inline>
//             {/* {user ? (
//                   <Avatar address={user} />
//                 ): (
//                   <Button onClick={connectToMetamask} variant="outline-primary">Connect to wallet</Button>
//                 )} */}
//                 <Link to="/selection">
//                 <Button variant="outline-primary">{this.state.account}</Button>
//               </Link>
//               <Nav.Link 
//               onClick={() => 
//                 scroller.scrollTo('hero', {
//                   smooth: true,
//                   offset: -70,
//                   duration: 1000 })} 
//                 className="link" href="#hero">Home</Nav.Link>
//               <Nav.Link onClick={() => scroller.scrollTo('descr', {
//                 smooth: true,
//                 offset: -70,
//                 duration: 1000,
//                 })} 
//                 className="link" href="#descr">Game Experiences</Nav.Link>
//               {/* <Nav.Link className="link" href="#link">Features</Nav.Link> */}
//               <Nav.Link className="link" href="#link">Contact Us</Nav.Link>
//               {/* <Link to="/selection"> */}
//                 {/* {user ? (
//                   <Avatar address={user} />
//                 ): (
//                   <Button onClick={connectToMetamask} variant="outline-primary">Connect to wallet</Button>
//                 )} */}
                
//               {/* </Link> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//     </>
//   );
// }
// }

// export default Header

