import React from 'react';
import './ImageComp.css';

function  ImageComp ({src}) {
    return (
        <img src={src} alt="slide-img" className="img__styles"></img>
    )
}

export default ImageComp  
