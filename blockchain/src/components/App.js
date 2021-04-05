import React, { Component } from 'react';
// import logo from '../logo.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRewarded: false,
      isMinting: false,
      isLoggedIn: false,
    };
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
        </nav>
        <div className='nft-sec'>
          <div className="dungeon">
            <div className="avatar-section">
              <Container>
                <Row>
                  <Col sm={8}>
                    <div>
                      {avatar(isLoggedIn)}
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div>
                      {mint(isMinting)}
                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
            
            <div className='trophy-cabinet'>
              <div className="title">
                <span className="text">Your Trophy Cabinet</span>
              </div>  
              <div className="scroll">           
                <div class="container vertical-scrollable">
                  <div class="row text-center">
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>
                      <div>{box(isRewarded)}</div>

                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

function box(props) {
  const isRewarded = props.isRewarded;
  if (isRewarded) {
    return (
      <div className='drawer col-xs-4'></div>
    )

  }else {
  return (
    <div className='drawer col-xs-4'>NFT</div>
  );
  }
}

function avatar(props) {
  const isLoggedIn= props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div className='avatar'></div>
    )

  }else {
  return (
    <div className='avatar'>AVATAR</div>
  );
  }
}

function mint(props) {
  const isMinting= props.isMinting;
  if (isMinting) {
    return (
      <div className='minted'></div>
    )

  }else {
  return (
    <div className='minted'>YOUR NEW NFT</div>
  );
  }
}

export default App;
