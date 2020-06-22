import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <br></br>
        <p>
          Amazing web application that use magic algorithm that classify fresh and rotten fruits (sadly, it can only classify Apple, Banana, and Orange).
          Turns out it using Image Classification with TensorFlow.js!
          This app use our converted TensorFlow.js format CNN model to provide better experience when using this app as PWA and provide offline capabilities.
          You can use this app to decide which fruits is fresh or rotten and decide which fruit is apple, banana, or orange
          (in case you hit your head or something, LOL)
          <br></br>
          <br></br>
          This amazing webapp won't be here and produced by itselft without great teamwork from cool person below:
          <ul>
            <li><strong>Arief Hirmanto</strong></li>
            <li><strong>Christina</strong></li>
            <li><strong>Fahmi Iman Alfarizki</strong></li>
            <li><strong>Gusti Triandi Winata</strong></li>
          </ul>
          Honorable mention to Bangkit Academy program from Google in collaboration with Gojek, Tokopedia, and Traveloka to provide capable technical talent in Machine Learning.
        </p>
        <p>
          You can check this awesome webapp in this <a href="https://github.com/sanggusti/final_bangkit">link</a> and awesome template in this <a href="https://github.com/IBM/tfjs-web-app#3-download-and-convert-pre-trained-model">link</a>
        </p>
      </div>
    );
  }
}
