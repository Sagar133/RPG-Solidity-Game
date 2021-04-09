import React from 'react'
import '../styles/App.css'
import history from '../history';
import Angel from '../assets/Angel.png'
import Castle from '../assets/Castle.png'

export default function App() {
  return (
    <div className="main">
      <div className="header">
          <h1>Welcome to the Dungeon Crawler</h1>
      </div>
      <div className="selection">
        <div className="select-hero" onClick={() => 
        {
          history.push('/Booth')
          history.go(0);
        }}>
            <h4>Vote for Hero</h4>
            <img src={Angel} alt="Angel" width="200" height="200"/>
        </div>
        <div className="select-story" onClick={() => 
        {
          history.push('/Booth')
          history.go(0);
        }}>
        <h4>Vote for Story</h4>
        <img src={Castle} alt="Angel" width="200" height="200"/>
        </div>
      </div>
    </div>
  )
}
