import React, { Component } from 'react';
// import logo from '../logo.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import Web3 from 'web3';

import TropyChar from '../abis/TrophyChar.json'
// var fs = require('fs');
// var jsonFile = "../abis/TrophyChar.json";
// var parsed= JSON.parse(fs.readFileSync(jsonFile));
// var abi = parsed.abi;

// var YourContract= new web3.eth.Contract(abi, 0x12345678912345678912345678912345678912);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRewarded: false,
      isMinting: false,
      isLoggedIn: false,
      // items: [], 
      account: '',
      contract: null,
      usersNftCount: 0,
      trophies: [],
      loading: true
    };
    this.loadWeb3();
    this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Non ethereum browser detected. You should consider trying Metamask")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = TropyChar.networks[networkId]
    if (networkData) {
      const abi = TropyChar.abi;
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      //console.log(this.state.account)
      this.setState({ contract })

      const usersNftCount = await contract.methods.usersNftCount(this.state.account).call()
      this.setState({ usersNftCount: Number(usersNftCount.toString()) })

      console.log(usersNftCount.toString());

      for (var i = 1; i <= this.state.usersNftCount; i++) {
        const trophy = await contract.methods.usersNft(this.state.account, i).call()
        //console.log(trophy);
        this.setState({
          trophies: [...this.state.trophies, trophy]
        })
      }

      //console.log('users trophies', this.state.usersNftCount, this.state.trophies)
    } else {
      window.alert('Smart contract not deployed to the detected network')
    }
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn
    const isMinting = this.state.isMinting

    const isRewarded = this.state.isRewarded
    return (
      <div className="screen">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dungeons Game
          </a>
          <ul className='navbar-nav px-3'>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className='text-white'><span id='account'>{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        <div className='nft-sec row'>
          <div className="dungeon col-md-10 col-sm-12">
            {/* <div className="avatar-section"> */}
            <div className="row">
              <div className="col-md-5 col-xs-10">{avatar(isLoggedIn)}</div>
              <div className="col-md-3"></div>
              <div className="col-md-4 col-xs-10">{mint(isMinting)}</div>
            </div>
            <div className='row'>
              <div className='col-md-10 col-xs-10'>
                <button
                  type="submit"
                  className="btn btn-link btn-block btn-sm"
                  onClick={(event) => {
                    event.preventDefault()
                    console.log('triggered');
                    this.state.contract.methods.requestNewRandomTrophy(
                      1,
                      'sagar',
                      1,
                      // '0x775C72FB1C28c46F5E9976FFa08F348298fBCEC0'
                      this.state.account
                    ).send({ from: this.state.account }).on('transactionHash', (hash) => {
                      //console.log('true');
                      this.setState({ loading: false })
                    })
                  }}>
                  Test Mint Random NFT...
                </button>
              </div>
            </div>

              {/* <Container>
                <Row>
                  <Col sm={6}>
                    <div>
                      {avatar(isLoggedIn)}
                    </div>
                  </Col>
                  <Col sm={2}></Col>
                  <Col sm={4}>
                    <div>
                      {mint(isMinting)}
                    </div>
                  </Col>

                </Row>
              </Container> */}
            {/* </div> */}

            <div className='row trophy-cabinet'>
              <div className="row title">
                <span className="col-md-4 text">Your Trophy Cabinet</span>
              </div>
              <div className="scroll row">
                <div class="container vertical-scrollable">
                  <div class="col-sm text-center">
                    {this.state.trophies.map((trophy, key) => {
                      console.log(trophy, key);
                      return (
                        // <div key={key} className="col-md-3 mb-3">
                        //   <div className='dispToken'></div>
                        //   <div>{trophy}</div>
                        // </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* <div className="selection">
        </div> */}
        
      </div>
    );
  }
}

// function box(props) {
//   const isRewarded = props.isRewarded;
//   if (isRewarded) {
//     return (
//       <div className='drawer col-xs-4'></div>
//     )

//   }else {
//   return (
//     <div className='drawer col-xs-4'>NFT</div>
//   );
//   }
// }

function avatar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div className='avatar'></div>
    )

  } else {
    return (
      <div className='avatar'>AVATAR</div>
    );
  }
}

function mint(props) {
  const isMinting = props.isMinting;
  if (isMinting) {
    return (
      <div className='minted'></div>
    )

  } else {
    return (
      <div className='minted'>YOUR NEW NFT</div>
    );
  }
}

export default App;
// import React, { Component } from 'react';
// // import logo from '../logo.png';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import './App.css';
// import Web3 from 'web3';

// import TropyChar from '../abis/TrophyChar.json'
// // var fs = require('fs');
// // var jsonFile = "../abis/TrophyChar.json";
// // var parsed= JSON.parse(fs.readFileSync(jsonFile));
// // var abi = parsed.abi;

// // var YourContract= new web3.eth.Contract(abi, 0x12345678912345678912345678912345678912);

// class App extends Component {

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
//     this.setState({account: accounts[0]})

//     const networkId = await web3.eth.net.getId()
//     const networkData = TrophyChar.networks[networkId]
//     if(networkData){
//       const abi = TrophyChar.abi; 
//       const address = networkData.address
//       const contract = new web3.eth.Contract(abi, address)
//       // console.log(contract)
//       this.setState({ contract })
//       const usersNftCount = await contract.methods.usersNftCount().call()
//       this.setState({usersNftCount})
//       for(var i = 1; i<= usersNftCount; i++) {
//         const trophy = await contract.methods.trophies(i).call()
//         this.setState({
//           trophies: [...this.state.trophies, trophy]
//         })

//       }
//       console.log(this.state.trophies)

//       // Load trophies

//     } else {
//       window.alert('Smart contract not deployed to the detected network')
//     }
    
//   }
  

//   render() {
//     const isLoggedIn = this.state.isLoggedIn
//     const isMinting = this.state.isMinting

//     const isRewarded = this.state.isRewarded
//     return (
//       <div className="screen">
//         <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
//           <a
//             className="navbar-brand col-sm-3 col-md-2 mr-0"
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Dungeons Game
//           </a>
//           <ul className='navbar-nav px-3'>
//             <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
//               <small className='text-white'><span id='account'>{this.state.account}</span></small>
//             </li>
//           </ul>
//         </nav>
//         <div className='nft-sec'>
//           <div className="dungeon">
//             <div className="avatar-section">
//               <Container>
//                 <Row>
//                   <Col sm={8}>
//                     <div>
//                       {avatar(isLoggedIn)}
//                     </div>
//                   </Col>
//                   <Col sm={4}>
//                     <div>
//                       {mint(isMinting)}
//                     </div>
//                   </Col>

//                 </Row>
//               </Container>
//             </div>
            
//             <div className='trophy-cabinet'>
//               <div className="title">
//                 <span className="text">Your Trophy Cabinet</span>
//               </div>  
//               <div className="scroll">           
//                 <div class="container vertical-scrollable">
//                   <div class="row text-center">
//                     {this.state.trophies.map((trophy, key) => {
//                       return (
//                       <div key={key} className="col-md-3 mb-3">
//                         <div className='dispToken'></div>
//                         <div>{trophy}</div>
//                       </div>
//                       )
//                     })}
//                   </div>  
//                       {/* <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div>
//                       <div>{box(isRewarded)}</div> */}

//                   </div>
//                 </div>
//               </div> 
//             </div>
//           </div>
//           <div className="selection">
//         </div>        
//       // </div>
//     );
//   }
// }

// // function box(props) {
// //   const isRewarded = props.isRewarded;
// //   if (isRewarded) {
// //     return (
// //       <div className='drawer col-xs-4'></div>
// //     )

// //   }else {
// //   return (
// //     <div className='drawer col-xs-4'>NFT</div>
// //   );
// //   }
// // }

// function avatar(props) {
//   const isLoggedIn= props.isLoggedIn;
//   if (isLoggedIn) {
//     return (
//       <div className='avatar'></div>
//     )

//   }else {
//   return (
//     <div className='avatar'>AVATAR</div>
//   );
//   }
// }

// function mint(props) {
//   const isMinting= props.isMinting;
//   if (isMinting) {
//     return (
//       <div className='minted'></div>
//     )

//   }else {
//   return (
//     <div className='minted'>YOUR NEW NFT</div>
//   );
//   }
// }

// export default App;
