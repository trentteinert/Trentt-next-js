import React from 'react';
//These are Third party packages for smooth slideshow
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  //Array of Images
  const images = [
    'images/Now/img1.jpg',
    'images/Now/img2.jpg',
    'images/Now/img3.jpg',
    'images/Now/img4.jpg',
  ];

  const indicators = (index) => (
    <div className='indicator'>
      {index + 1} / {images.length}
    </div>
  );

  const buttonStyle = {
    position: 'absolute',
    left: '38px',
    top: '-12px',
    width: 'fit-content',
    height: '14px',
    lineHeight: '14px',
    fontSize: '14px',
    border: '0px',
  };
  const buttonStyle1 = {
    position: 'absolute',
    top: '-12px',
    width: 'fit-content',
    height: '14px',
    lineHeight: '14px',
    fontSize: '14px',
    border: '0px',
  };

  //These are custom properties for zoom effect while slide-show
  const Properties = {
    indicators: indicators,
    transitionDuration: 250,
    autoplay: false,
    canSwipe: false,
    infinite: true,

    prevArrow: <button style={{ ...buttonStyle1 }}>prev</button>,

    nextArrow: <button style={{ ...buttonStyle }}>next</button>,
  };
  return (
    <div className='max-w-[45%] ml-[360px] mt-20 mr-10'>
      <Fade {...Properties}>
        {images.map((each, index) => (
          <div key={index}>
            <img className='w-[100%] cursor-grab mt-2' src={each} />
          </div>
        ))}
      </Fade>
      <div className='absolute top-[67px] left-[391px] w-fit h-fit leading-4 text-sm z-10 cursor-default'>
        |
      </div>
    </div>
  );
};

export default Slideshow;
