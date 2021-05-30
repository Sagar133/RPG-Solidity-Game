import React,{useState, useEffect} from 'react'
import '../styles/booth.css'
import Header from './StoryHeader'
import Box from './Box'





export default function App() {
    let [story, setStory] = useState([]);
    useEffect(() => {
      loadData();
    }, []);
    const loadData = async () => {
      const response = await fetch(
        "https://dungeon-crawler-1.herokuapp.com/v1/character/find/all"
      );
      const data = await response.json();
      setStory(data.character);
      console.log(data);
    };
  return (
    <div className="main screen">
      <Header title={"Welcome to the Story Voting Page"} />
      <div className="body">
        <div class="flex-container">
          {story
            ? story.map((item) => (
              item.isStory?
                <Box
                  img={`https://gateway.pinata.cloud/ipfs/${item.image}`}
                  name={item.name}
                  walletAddress={item.walletAddress}
                />:null
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
