import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BsHeart } from "react-icons/bs";
import {FiThumbsUp} from 'react-icons/fi';
import UpvoteButton from '../assets/upvote.svg';
import LikeOutline from '../assets/like-outlined.svg';
import LikeFill from '../assets/like-fill.svg';

export default function Box(props) {
    return (
      <div className="action-cards">
        <div className="card-owner-like">
          <div className="text-header1">
            {" "}
            Submitted by: <span className="name-artist">{props.name}</span>{" "}
          </div>
          <img src={LikeOutline} className="like-button" alt="like" />
        </div>
        <div className="imageBox">
          <Image
            src={props.img}
            roundedCircle
            style={{
              height: 150,
              width: 150,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </div>
        <div className="imageDetails">
          {/* <div className="d-flex flex-row-reverse">
            <Button variant="primary">
              <span className="outline text-header1">Vote</span> <FiThumbsUp />
            </Button>
            
          </div> */}
          <div className="upvote">
            <a href="#">
              <img src={UpvoteButton} alt="Upvote Button" />
            </a>
          </div>
        </div>
      </div>
    );
}
