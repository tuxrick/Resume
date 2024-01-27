import React from 'react';
import './style_assets.css';

function CircularImage({ src, alt }) {

  return <img src={src} alt={alt} className="circle_img"/>;
}

export default CircularImage;
