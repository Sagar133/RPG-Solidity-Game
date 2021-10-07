import React from "react";
import "./App.css";
import Angel from "../assets/angel.png";
import Castle from "../assets/castle.png";
import { useHistory } from "react-router-dom";


export const Home = () => {
  const history = useHistory();
  return (
    <div className="main">
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
}
