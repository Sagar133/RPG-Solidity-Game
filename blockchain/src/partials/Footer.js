import React from "react";
import "./css/footer.css";

export default function Footer() {
  return (
    <footer className="container1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Developed with ❤ by <a href="https://twitter.com/DungeonCrawle13" target="_blank">Team Dungeon Crawler</a> 
            
          </div>
          <div className="col-md-6">
            <a href="https://github.com/Sagar133/RPG-Solidity-Game" target="_blank">
              <div className="github"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}