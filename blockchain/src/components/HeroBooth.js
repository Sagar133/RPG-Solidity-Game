import React, {useState,useEffect} from 'react'
import '../styles/booth.css'
import Header from './HeroHeader'
import Box from './Box'



export default function App() {
  let [heroes,setHeroes]=useState([]);
  useEffect(() => {
    loadData();
  }, []);
   const loadData = async () => {
     const response = await fetch(
       "https://dungeon-crawler-1.herokuapp.com/v1/character/find/all"
     );
     const data = await response.json();
     setHeroes(data.character);
     console.log(data);
   };
  return (
    <div className="main screen">
      <Header title={"Welcome to the Hero Voting Page"} />
      <div className="body">
        <div class="flex-container">
          {heroes
            ? heroes.map((hero) => (
              hero.isStory?null:
                <Box
                  img={`https://gateway.pinata.cloud/ipfs/${hero.image}`}
                  name={hero.name}
                  walletAddress={hero.walletAddress}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
