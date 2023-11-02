# De-DungeonCrawler

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Sagar133/RPG-Solidity-Game">
    <img src="https://github.com/Sagar133/RPG-Solidity-Game/blob/master/blockchain/src/assets/Castle.png" alt="Logo" width="120" height="120">
  </a>
  <h6>Built for the Chainlink Spring hackathon 2021</h6>
  <img src="https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/chainlink.png" alt="Logo" width="40" height="40">



  <h3 align="center">De-Dungeon Crawler</h3>

  <p align="center">
    An awesome RPG dungeon adveture game running on Blockchain and powered by Chainlink VRF!
    <br />
    <a href="https://github.com/Sagar133/RPG-Solidity-Game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Sagar133/RPG-Solidity-Game">View Demo</a>
    ·
    <a href="https://github.com/Sagar133/RPG-Solidity-Game/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sagar133/RPG-Solidity-Game/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![diagram](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/diagram.jpg)

We created an RPG game that is powered by the Ethereum blockchain and ChainLink's decentralised Oracle Network and minting **NFTs** 

![game](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/gamescreen.png)


**We have chainlink price feed setup, We have our own ERC20 token named 'Dungeon' which we are assuming to be 1$. So if a players wants to play the game we get LINK/USD price from the price feed and equivalent amount of Dungeon token that person has to pay in return to play the game. In the game there are 4 - 5 chests which mints 20 dungeon token and there is one Link Token which when claimed finishes the game.**

**A player has 3 lives if he loses 3 lives he dies, he has to play again to get the dungeon token. On winning the game successfully, we reward user with a unique NFT (Non Fungible Token) which has randomness generated by Chainlink VRF,IPFS provider. There is a DAO where users (artists/story writers) share Monsters/Game Character images, stories/maps for the next level, in the form of an Open Artboard/Creation zone for creators, upon reviewing which will be approved by the game Admins.**


![nft](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/nft.png)

**On a certain epoch the character and story with maximum votes raised will be awarded the 'Dungeon' token. And those characters and story would be implemented in the game.**


### Built With
We have used the following technologies for this project:
* [Ethereum](https://ethereum.org/en/) (Ethereum blockchain ERC20 and ERC21 ethereum smart contracts)
* [Solidity](https://docs.soliditylang.org/en/v0.8.3/) (Language for writing smart contracts)
* [Chainlink](https://chain.link/) (Chainlink VRFs for generating randomness and minting NFTs as rewards)
* [Phaser](https://phaser.io/) (For creating the RPG game)
* [Bootstrap](https://getbootstrap.com) (CSS framework)
* [ReactJS](https://reactjs.org/) (web UI)
* [IPFS](https://ipfs.io/) (P2P network for storing and sharing files in a distibuted file system)
* [Infuria](https://infura.io/)  (Access to Ethereum network)
* [Metamask](https://metamask.io) (Wallet Provider)

There are many more


<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have an Ethereum Wallet provider and NPM/Yarn package managers set up along with NodeJS. NPM can be installed with:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Following are the instructions for running the web application locally. First navigate to `RPG-Solidity-Game/blockchain/`

1. Get a free API Key at [https://infura.io/](https://infura.io/) , and Etherscan
2. Clone the repo
   ```sh
   git clone https://github.com/Sagar133/RPG-Solidity-Game
   ```
   First navigate to `RPG-Solidity-Game/blockchain/`
3. First navigate to `RPG-Solidity-Game/blockchain/` and Install NPM packages
   ```sh
   npm install
   yarn
   ```
4. Enter your API in `.env` inside 
RPG-Solidity-Game/blockchain/ folder

   ```JS
   ETHERSCAN_API_KEY="Your ETHERSCAN API KEY"
   RPC_URL="https://rinkeby.infura.io/v3/{YOUR RINKEBY API KEY}"
   MNEMONIC="Seed phrase of your metamask wallet"
   SKIP_PREFLIGHT_CHECK=true
   PRIVATE_KEY="Enter exported private key of your ethereum wallet metamask"
   ```
   
   NOTE: **NEVER SHARE YOUR API KEYS AND PRIVATE KEYS**
   
 5. Run the web application locally:
  ```sh
   npm start
   OR
   yarn start
   ```  

Following are the instructions for running the game locally:
1. First navigate to `RPG-Solidity-Game/` folder and Install NPM packages
   ```sh
   npm install
   yarn
   ```
   
 2. Run the game locally:
  ```sh
   npm start
   OR
   yarn start
   ```  


<!-- USAGE EXAMPLES -->
## Usage

This project can be scaled in future and we can create our own marketplace for creating own assets and minting NFTs and using the rewards. Blockchain empowers the gamers to own the cryptocurrencies and even convert them into fiat currency. A crucial issue blockchain hopes to tackle is the common problem of delay in payments to the e-sports players. Blockchain technology makes use of smart contracts on which people can build decentralized applications.

| selection | Hero | Story | 
| --- | --- | --- | 
| ![1](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/selection.png) | ![2](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/heroes.png) | ![3](https://github.com/Sagar133/RPG-Solidity-Game/blob/elio-blockchain/blockchain/src/assets/story.png)|  |



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source blockchain community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.












