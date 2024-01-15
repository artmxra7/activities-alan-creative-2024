import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="/images/njiko.jpg" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="/images/bljr1.jpg" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="/images/img-z1.png" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-english-classes-twitter-post-design-template-498ed32626a518d202fbc12e3eaa0d6c_screen.jpg?ts=1698452087.jpg" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://warungfreelancer.com/src/gambar/produk/beli-template-banner-bimbel-akademik.webp" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-tutoring-ads-design-template-b3a46c8cbb35879a1508ed53f4b8e79d_screen.jpg?ts=1680552035.jpg" alt="6" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ position: "relative", width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            boxSizing: "border-box"
          }}
        >
          <button
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
            onClick={() => this.setState({ goToSlide: this.state.goToSlide - 1 })}
          >
            {'<'}
          </button>
          <button
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
            onClick={() => this.setState({ goToSlide: this.state.goToSlide + 1 })}
          >
            {'>'}
          </button>
        </div>
      </div>
    );
  }
}
