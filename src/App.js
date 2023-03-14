import React, { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import ImageLinkForm from "./ImageLinkForm";
import './App.css'
import Rank from './Rank.js';
import Design from "./Design";
import Clarifai from 'clarifai';
// import FaceRecognition from "./FaceRecognition";

const app = new Clarifai.App({
  apiKey: '7ada3fa0a3be46a3beab0ed1d8e9ad45'
});


const App = () => {
  const [inputChange, setInputChange] = useState('');
  const onInputChange = (event) => {
    setInputChange(event.target.value);
  }
  const onButtonSubmit = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://samples.clarifai.com/BarackObamaAndXiJinping.jpg')
      .then(response => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <Design />
      <Navigation / >
      <Logo />
      <Rank/>
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
{/* Uncaught ReferenceError: process is not defined
    at App._init (App.js:124:1)
    at new App (App.js:53:1)
    at ./src/App.js (App.js:11:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    at ./src/index.js (Rank.js:16:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at startup:7:1 */}