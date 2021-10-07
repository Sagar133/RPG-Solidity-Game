import React from "react";
import "./App.css";
import Angel from "../assets/angel.png";
import { useHistory } from "react-router-dom";
import { Toolbar, Typography } from "@material-ui/core";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import DisconnectIcon from "@material-ui/icons/LinkOff";


export const Home = ({ connection }) => {
  const history = useHistory();
  const wallet = useWallet();
  const [balance, setBalance] = React.useState();

  React.useEffect(() => {
    (async () => {
      if (wallet?.publicKey && connection) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  return (
    <div className="main">
      <Toolbar style={{ display: "flex" }}>
        {wallet.connected && (
          <div>BALANCE: {(balance || 0).toLocaleString()} SOL</div>
        )}
        <Typography
          component="h1"
          variant="h6"
          style={{ flexGrow: 1 }}
        ></Typography>
        <WalletMultiButton />
        {wallet.connected && (
          <WalletDisconnectButton
            startIcon={<DisconnectIcon />}
            style={{ marginLeft: 8 }}
          />
        )}
      </Toolbar>
      <div className="header">
        <h1>Welcome to the Dungeon Crawler</h1>
      </div>
      <div className="selection">
        <div
          className="select-hero"
          onClick={() => {
            history.push("/game");
          }}
        >
          <h4>Enter game</h4>
          <img src={Angel} alt="Angel" width="200" height="200" />
        </div>
        {/* <div
          className="select-story"
          onClick={() => {
            history.push("/Booth");
            history.go(0);
          }}
        >
          <h4>Vote for Story</h4>
          <img src={Castle} alt="Angel" width="200" height="200" />
        </div> */}
      </div>
    </div>
  );
};
