import React, { useState } from "react";
import "../styles/App.css";
const formData = {
  name: "",
  description: "",
  walletAddress: "",
  email: "",
  file: [],
  isStory: false,
};

export default function App() {
  const [values, setValues] = useState(formData);
  const pathname = window.location.href.split("/").pop();
  const handleInputChange = (e) => {
    if (e.target.name !== "file") {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      const fileName = e.target.files[0];
      setValues({
        ...values,
        [e.target.name]: fileName,
      });
    }
  };
  const handleSubmit = (e) => {
    if (pathname === "StoryUpload")
      setValues({
        ...values,
        isStory: true,
      });
    const data = new FormData();
    for (const name in values) {
      data.append(name, values[name]);
    }
    e.preventDefault();
    console.log("form is going with", data);
    fetch("https://dungeon-crawler-1.herokuapp.com/v1/character/new", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setValues({
          name: "",
          description: "",
          walletAddress: "",
          email: "",
          file: [],
          isStory: false,
        });
      });
  };
  return (
    <div className="main">
      <div className="header">
        <h1 className="text-header">Upload your Creation here!!</h1>
      </div>
      <form>
        <div className="container">
          <div className="form-group">
            <label className="text-header1">Name of the Character</label>
            <input
              value={values.name}
              name="name"
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          {console.log(pathname)}
          <div className="form-group">
            <label className="text-header1">Character Descripton</label>
            <input
              value={values.description}
              name="description"
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="text-header1">Wallet Address</label>
            <input
              value={values.walletAddress}
              onChange={handleInputChange}
              type="text"
              name="walletAddress"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="text-header1">Email</label>
            <input
              value={values.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label className="text-header1">Upload</label>
            <br />
            <input
              onChange={handleInputChange}
              type="file"
              id="myFile"
              name="file"
            />
          </div>
          {console.log(values)}
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
// <form enctype="multipart/form-data" method="POST" action="/v1/character/new">
//     <label for="name">Character Name:</label>
//     <input type="text" name="name" />
//     <br/>
//     <label for="desc" >Character Descripton:</label>
//     <input type="text" name="desc" value="test"/>
//     <br/>
//     <label for="email" >Email:</label>
//     <input type="text" name="email" value="test@email.com"/>
//     <br/>
//     <label for="walletAddress" >Wallet Addr:</label>
//     <input type="text" name="walletAddress"value="0x12345" />
//     <br/>
//     <label for="file">Upload File</label>
//     <input type="file" name="file"/>
//     <br/>
//     <input type="hidden" name="isStory" value="no" >
//     <input type="submit" />
// </form>
