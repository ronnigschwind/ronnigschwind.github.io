import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../styles/Slideshow.css';

// eventually make it so images are passed as props for reusability
// for now just import images from image folder
import XavierandI from '../images/engagement-photo.jpg';
import Soccer from '../images/soccer.png';
import Graduation from '../images/graduation.jpeg';

class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
    //   indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
        XavierandI,
        Soccer,
        Graduation,
    ];
    return (
      <div className="App">
        {/* <h3>Slideshow</h3> */}
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide" style={{ textAlign: "center" }}>
                <img className="lazy" src={each} alt="sample" style={{ height: "500px", width: "400px" }}/>
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Back
          </button>
          <button onClick={this.next} type="button">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;