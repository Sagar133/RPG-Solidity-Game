import React from "react";
import "../styles/App.css";
import history from "../history";
import Angel from "../assets/Angel.png";
import Castle from "../assets/Castle.png";
import Home from "../assets/home.png";

export default function App() {
  return (
    <div className="main screen">
      <div className="header">Welcome to the Dungeon Crawler</div>
      <div className="selection">
        
        <div
          className="select-story"
          onClick={() => {
            history.push("/HeroBooth");
            history.go(0);
          }}
        >
          <h4 className="text-header">Vote for Hero</h4>
          <img className="dashboard-card-image" src={Angel} alt="Angel"  />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/StoryBooth");
            history.go(0);
          }}
        >
          <h4 className="text-header">Vote for Story</h4>
          <img className="dashboard-card-image" src={Castle} alt="Angel"  />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/App");
            history.go(0);
          }}
        >
          <h4 className="text-header">Go to your Inventory</h4>
          <img className="dashboard-card-image" src={Home} alt="home"  />
        </div>
      </div>
    </div>
  );
}
