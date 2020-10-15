import React, { useState } from 'react';
import ImageComp from './ImageComp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Slider.scss';

function Slider() {
    // Array of component to show inside the slide
    let sliderArr = [
        <ImageComp src={require("./images/slide1.jpg")}/>, 
        <ImageComp src={require("./images/slide2.jpg")}/>, 
        <ImageComp src={require("./images/slide3.jpg")}/>, 
        <ImageComp src={require("./images/slide1.jpg")}/>, 
        <ImageComp src={require("./images/slide3.jpg")}/>
    ]

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return(
                        <div 
                            key={index} 
                            className="slide"
                            style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }
            {/* Navigation buttons */}
            <button id="go__left" onClick={goLeft}><ArrowBackIosIcon/></button>
            <div className="slider_center">
                <h1>Welcome To <br/> BackYard</h1>
                {/* <p> We serve your some Fresh & Testy  </p> */}
            </div>
            <button id="go__right" onClick={goRight}><ArrowForwardIosIcon/></button>
        </div>
    )
}

export default Slider
