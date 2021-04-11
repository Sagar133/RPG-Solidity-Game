import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BsHeart } from "react-icons/bs";
import {FiThumbsUp} from 'react-icons/fi'

export default function Box(props) {
    return (
          <div>
            <div className="imageBox">
            <Image src={props.img} roundedCircle style={{height: 150, width: 150, alignSelf:'center', justifyContent:'center'}}/>
            </div>
            <div className="imageDetails">
              <p className="text-header1"> Submitted by: <span className="name-artist">{props.name}</span> </p>
                <BsHeart />
                <div className="d-flex flex-row-reverse">
                <Button variant="primary">Vote <FiThumbsUp /></Button>
                </div>
            </div>
          </div>
    )
}
