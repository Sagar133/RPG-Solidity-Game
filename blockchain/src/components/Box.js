import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BsHeart } from "react-icons/bs";
import {FiThumbsUp} from 'react-icons/fi';

export default function Box(props) {
  // function handleUpvote(){
  //       const requestOptions = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ title: "React POST Request Example" }),
  //       };
  //       fetch("https://reqres.in/invalid-url", requestOptions)
  //         .then(async (response) => {
  //           const isJson = response.headers
  //             .get("content-type")
  //             ?.includes("application/json");
  //           const data = isJson && (await response.json());

  //           // check for error response
  //           if (!response.ok) {
  //             // get error message from body or default to response status
  //             const error = (data && data.message) || response.status;
  //             return Promise.reject(error);
  //           }

  //           this.setState({ postId: data.id });
  //         })
  //         .catch((error) => {
  //           this.setState({ errorMessage: error.toString() });
  //           console.error("There was an error!", error);
  //         });
  // }
    return (
      <div className="action-cards">
        <div className="card-owner-like">
          <div className="text-header1">
            {" "}
            Submitted by: <span className="name-artist">{props.name}</span>{" "}
          </div>
          <img src="https://ipfs.io/ipfs/QmWV3Z5fgJyQSTh4ibe3p6V2nydyL6pjeqAZTU4ZDL4f1t?filename=like-outlined.svg"
           className="like-button" alt="like" />
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
              <img src="https://ipfs.io/ipfs/Qmbvgv6YqyTeopjdutCKohrEMxL4Dmd3xpbjpUDAN4Axdj?filename=upvote.svg" 
              alt="Upvote Button" />
            </a>
          </div>
        </div>
      </div>
    );
}
