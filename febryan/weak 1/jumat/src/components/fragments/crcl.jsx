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
            content: <img src="https://wallpapers.com/images/featured/mobile-legends-v0u46grjbqc6h9ga.jpg" alt="1" />
        },
        {
            key: uuidv4(),
            content: <img src="https://images.nvidia.com/content/images/call-of-duty-warzone-out-now-pc-system-requirements/call-of-duty-warzone-screenshot-001.jpg" alt="2" />
        },
        {
            key: uuidv4(),
            content: <img src="https://web.cdn.id.garenanow.com/webid/AOV/Wallpaper%20HD/AOV%20Grakk%20Yokozuna%20Wallpaper%20HD.jpg" alt="3" />
        },
        {
            key: uuidv4(),
            content: <img src="https://images3.alphacoders.com/121/1219362.jpg" alt="4" />
        },
        {
            key: uuidv4(),
            content: <img src="https://wallpapercave.com/wp/wp5488406.jpg" alt="5" />
        },

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
            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}

                    animationConfig={this.state.config}
                />
                <div
                    style={{
                        margin: "0 auto",
                        marginTop: "2rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                </div>
            </div>
        );
    }
}