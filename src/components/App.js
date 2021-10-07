import React from "react";
import "./App.css";
import Angel from "../assets/angel.png";
import Castle from "../assets/castle.png";
import { IonPhaser } from "@ion-phaser/react";
import MyGame from "../game";

export default function App() {
  return (
    <div className="main">
      <IonPhaser game={MyGame} initialize={initialize} />
      <div className="header">
        <h1>Welcome to the Dungeon Crawler</h1>
      </div>
      <div className="selection">
        <div
          className="select-hero"
          onClick={() => {
            history.push("/Booth");
            history.go(0);
          }}
        >
          <h4>Vote for Hero</h4>
          <img src={Angel} alt="Angel" width="200" height="200" />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/Booth");
            history.go(0);
          }}
        >
          <h4>Vote for Story</h4>
          <img src={Castle} alt="Angel" width="200" height="200" />
        </div>
      </div>
    </div>
  );
}
