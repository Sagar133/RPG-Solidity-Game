import React from 'react'
import '../styles/booth.css'
import Header from './Header'
import Box from './Box'





export default function App() {
  return (
    <div className="main screen">
      <Header title={'Welcome to the Story Voting Page'} />
      <div className="body">
        <div class="flex-container">
         <Box img="https://ipfs.io/ipfs/QmYqgb7MLAeqyJVHZrV5PUzH3ArJztS4WNZLwxahPmrMVS?filename=map1.png" />
         <Box img="https://ipfs.io/ipfs/QmUkLX1omgya6G11Qyjo5aMjQNZ5kaBLqAnxisVt2GtZGt?filename=map2.png" />
         <Box img="https://ipfs.io/ipfs/QmaPi7FGdFdQ5qZZ2AZdK5Gv7EKirp5kry2pkqY69hUd4F?filename=map3.png" />
         <Box img="https://ipfs.io/ipfs/QmVndNEEWCJ8mqx7xP9khnEMNvHF7NuGTkvQebtHFD6PoT?filename=map4.png" />
         <Box img="https://ipfs.io/ipfs/QmXmZyZ2wTqjmR43kBjoa6ZvdaCeLe5nzarq8A3anevTwy?filename=map5.png" />
         <Box img="https://ipfs.io/ipfs/QmQJkHDcu6UxLMAiL2bciddRymn64d9cdnrjLau4qwRGrw?filename=map6.png" />
         <Box img="https://ipfs.io/ipfs/QmTHVfKUfZVErmeGb1tfftyahq8KkKAqge1pNMFWZ5ecRG?filename=map7.png" />
         <Box img="https://ipfs.io/ipfs/QmSrkAvHLstoe7goe7ek4X8tca86Zwqbs5RAyCeH1G9mPE?filename=map8.png" />

        </div>
      </div>
    </div>
  )
}
