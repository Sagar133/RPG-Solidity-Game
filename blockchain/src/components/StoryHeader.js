import React from 'react'
import '../styles/booth.css'


export default function Header(props) {
    return (
    <div className="header-booth">
      <div className="navbar">
      <a href="/selection" class="active" className='navbox text-header1'>Home</a>
      <a href="./StoryUpload" class="right" className='navbox text-header1'>Upload</a>
      </div>
          <h1 className='text-header'>{props.title}</h1>
      </div>
    )
}
