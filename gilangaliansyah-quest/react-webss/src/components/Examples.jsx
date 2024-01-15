import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    isMobile: window.innerWidth <= 768,
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="https://example.com/image1.jpg" alt="1" style={{ height: "300px" }} />,
    },
    {
      key: uuidv4(),
      content: <img src="https://example.com/image2.jpg" alt="2" style={{ height: "300px" }} />,
    },
    {
      key: uuidv4(),
      content: <img src="https://example.com/image3.jpg" alt="3" style={{ height: "300px" }} />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    // Set an interval to change the slide every few seconds
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length,
      }));
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);

    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ width: "100%", padding: "20px" }}>
        {/* Carousel */}
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />

        {this.state.isMobile && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>
              Carousel view is not supported on mobile devices. Please try on a device with a larger screen.
            </p>
          </div>
        )}

        {this.state.isMobile && (
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "100%",
              padding: "10px",
            }}
          >
            {/* Content for mobile mode can be placed here */}
          </div>
        )}
      </div>
    );
  }
}
