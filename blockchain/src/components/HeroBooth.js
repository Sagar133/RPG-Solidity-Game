import React from 'react'
import '../styles/booth.css'
import Header from './Header'
import Box from './Box'
import Death from '../assets/death.png'
import Frog from '../assets/frog.png'
import Icy from '../assets/icy.png'
import Dummy from '../assets/dummy.jpeg'
import Undead from '../assets/undead.png'
import Hemin from '../assets/hemin.png'
import Hyena from '../assets/hyena.png'
import Elf from '../assets/elf.png'



export default function App() {
  return (
    <div className="main screen">
      <Header title={'Welcome to the Hero Voting Page'} />
      <div className="body">
        <div class="flex-container">
         <Box img={Death} name="Sagar" />
         <Box img={Frog} name="Elio" />
         <Box img={Icy} name="Skaria" />
         <Box img={Dummy} name="Eli" />
         <Box img={Undead} name="Tony Stark" />
         <Box img={Hemin} name="Elon Musk" />
         <Box img={Hyena} name="Elvin" />
         <Box img={Elf} name="Jeff" />


        </div>
      </div>
    </div>
  )
}
