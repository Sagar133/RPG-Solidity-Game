import React from 'react'
import '../styles/booth.css'


export default function Header(props) {
    return (
    <div className="header">
      <div className="navbar">
      <a href="./" class="active" className='navbox'>Home</a>
      <a href="./Upload" class="right" className='navbox'>Upload</a>
      </div>
          <h1>{props.title}</h1>
      </div>
    )
}
