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
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-header"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Dungeon Crawler
          </a>
          <ul className='navbar-nav px-3'>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className='text-white'><span id='account'>{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        <div className='nft-sec container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
            <div className="content mr-auto ml-auto">
              <h5 className="text">Your Trophy Cabinet</h5>  
            {/* <h5 className="text col-md-6 col-sm">Your Trophy Cabinet</h5> </div> */}
              <button
                  type="submit"
                  className="btn btn-link btn-block btn-sm mint-btn dispToken"
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
            </main>
          </div>
          <hr/><hr/>

          <div className="dungeon trophy-cabinet row text-center">

            {/* <div className='row trophy-cabine'> */}
                      {this.state.trophies.map((trophy, key) => {
                        //console.log(trophy, key);
                        let levelPass = trophy.levelPass.toString()
                        let name = trophy.name.toString()
                        let tokenId = trophy.tokenId.toString()
                        let rarity = trophy.rarity.toString()
                        let worth = trophy.worth.toString()
      
                        console.log(levelPass, name, tokenId, rarity, worth);
                      })}   
            
            
          {/* </div> */}
        </div>
        </div>        
      </div>
    );
  }
}
export default App
