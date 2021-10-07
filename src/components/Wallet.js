import "./App.css";

import { useMemo } from "react";
import React from 'react';
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const treasury = new anchor.web3.PublicKey(
  "54PRWfJbjMFn8FtHqEFzinL5LjMb4MugSNer3sLcHSqG"
);

const config = new anchor.web3.PublicKey(
  "4HB64gtwMe7K3vZLW8x6Pa3mPwESFPEYA9ZBf9gwvK89"
);

const candyMachineId = new anchor.web3.PublicKey(
  "8v7eM2kpSpY4WND6TmPNNN8fuZ9PzVnfLhaYdG8vqkh1"
);

const network = "mainnet-beta";

const rpcHost = "https://explorer-api.devnet.solana.com/";
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt("1631714400000", 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const WalletWrapper = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolletWallet(), getSolflareWallet()],
    []
  );

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { connection });
    }
    return child;
  });

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          {childrenWithProps}
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletWrapper;
