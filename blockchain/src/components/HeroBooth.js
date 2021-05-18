import React from 'react'
import '../styles/booth.css'
import Header from './Header'
import Box from './Box'



export default function App() {
  return (
    <div className="main screen">
      <Header title={'Welcome to the Hero Voting Page'} />
      <div className="body">
        <div class="flex-container">
         <Box img="https://ipfs.io/ipfs/QmeesF1xg9R6Lbg2dg3xx8bC33SVFfXsFVoDFWJpfocgNU?filename=death.png" name="Rishabh" />
         <Box img="https://ipfs.io/ipfs/QmR7nnghewVCo2sMDG85NDAjgr2jXyajSJ9QAEquTJvbWJ?filename=frog.png" name="Elio" />
         <Box img="https://ipfs.io/ipfs/QmQPvDRcPLGsSHv7qT3PDCRWwFpwo2uxnxzrRWk35G7Jjr?filename=icy.png" name="Skaria" />
         <Box img="https://ipfs.io/ipfs/QmPNKMts9HozfRze9MLzxuKVZtHsn2irYvFKXRbtdvkRqm?filename=dummy.jpeg" name="Eli" />
         <Box img="https://ipfs.io/ipfs/QmT9vR2ryVJc4DPM2rKitqbEuf7qY86RB8SEfa2nxz8yKA?filename=undead.png" name="Tony Stark" />
         <Box img="https://ipfs.io/ipfs/Qmb5zY2biFYBFuCBguShdS1rkFGCnn6uS8sw5xax5y4mJh?filename=hemin.png" name="Elon Musk" />
         <Box img="https://ipfs.io/ipfs/QmUKPjH49ahKoXmsRC2nJWJY8aK47zxGDPUwGy81Rt6HW7?filename=hyena.png" name="Elvin" />
         <Box img="https://ipfs.io/ipfs/QmVuP4MnPwa3MLx72etT5FT9AuxswzwBw6CubpjNkRHqY1?filename=elf.png" name="Jeff" />


        </div>
      </div>
    </div>
  )
}
