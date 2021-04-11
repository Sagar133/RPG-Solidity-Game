import React from 'react'
import '../styles/booth.css'
import Header from './Header'
import Box from './Box'
import map1 from '../assets/map1.png'
import map2 from '../assets/map2.png'
import map3 from '../assets/map3.png'
import map4 from '../assets/map4.png'
import map5 from '../assets/map5.png'
import map6 from '../assets/map6.png'
import map7 from '../assets/map7.png'
import map8 from '../assets/map8.png'





export default function App() {
  return (
    <div className="main screen">
      <Header title={'Welcome to the Story Voting Page'} />
      <div className="body">
        <div class="flex-container">
         <Box img={map1} />
         <Box img={map2} />
         <Box img={map3} />
         <Box img={map4} />
         <Box img={map5} />
         <Box img={map6} />
         <Box img={map7} />
         <Box img={map8} />

        </div>
      </div>
    </div>
  )
}
