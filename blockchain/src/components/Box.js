import React from 'react'
import { Image, Button } from 'react-bootstrap'
import dummy from '../assets/dummy.jpeg'
import { BsHeart } from "react-icons/bs";
import {FiThumbsUp} from 'react-icons/fi'

export default function Box() {
    return (
          <div>
            <div className="imageBox">
            <Image src={dummy} roundedCircle style={{height: 150, width: 150, alignSelf:'center', justifyContent:'center'}}/>
            </div>
            <div className="imageDetails">
              <p> Submitted by: The Artist </p>
                <BsHeart />
                <div className="d-flex flex-row-reverse">
                <Button variant="primary">Vote <FiThumbsUp /></Button>
                </div>
            </div>
          </div>
    )
}
