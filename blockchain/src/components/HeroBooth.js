import React from 'react'
import '../styles/booth.css'
import Header from './Header'
import Box from './Box'


export default function App() {
  return (
    <div className="main">
      <Header title={'Welcome to the Hero Voting Page'} />
      <div className="body">
        <div class="flex-container">
         <Box/>
         <Box/>
         <Box/>
         <Box/>
         <Box/>
         <Box/>

        </div>
      </div>
    </div>
  )
}
