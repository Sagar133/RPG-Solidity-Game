import React from "react";
import "./App.css";
import { Routes } from "./Routes";
import WalletWrapper from "./Wallet";


export default function App() {
  return (
    <WalletWrapper>
      <Routes />
    </WalletWrapper>
  );
}
