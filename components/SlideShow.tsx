import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

// gallery
const images = [
  '/images/Now/img1.jpg',
  '/images/Now/img2.jpg',
  '/images/Now/img3.jpg',
  '/images/Now/img4.jpg',
  '/images/Now/img5.jpg',
  '/images/Now/img6.jpg',
  '/images/Now/img7.jpg',
  '/images/Now/img8.jpg',
  '/images/Now/img9.jpg',
  '/images/Now/img10.jpg',
  '/images/Now/img11.jpg',
  '/images/Now/img12.jpg',
  '/images/Now/img13.jpg',
  '/images/Now/img14.jpg',
];

//slideshow useState - counter starting at 1
const SlideShow = () => {
  const [imageNum, imageCounter] = useState(1);

  // page next - if above images.length reset to 1
  const plusSlide = () => {
    if (imageNum > 13) {
      imageCounter(1);
    } else {
      imageCounter(imageNum + 1);
    }

    console.log(imageNum);
  };

  // page prev - if below 2 set to images.length
  const minusSlide = () => {
    if (imageNum < 2) {
      imageCounter(images.length);
    } else {
      imageCounter(imageNum - 1);
    }
  };

  // useState for swapping between slideshow and gallery
  const [slideShow, changeDisplay] = useState(false);

  // handler to change the useState
  const handleDisplay = () => {
    changeDisplay((slideShow) => !slideShow);
  };

  return (
    <div
      id='slideshow-container'
      className='ml-[360px] mt-[60px] mr-[60px] w-fit h-fit  relative'
    >
      <div className='flex pb-1 '>
        <ul className='w-[50%] flex'>
          <li
            onClick={minusSlide}
            className='cursor-pointer text-[14px] leading-[14px] pr-[2px] mr-[0px]'
          >
            prev
          </li>
          <div className='cursor-default text-[14px] leading-[14px] pr-[2px] mr-[0px]'>
            |
          </div>
          <li
            onClick={plusSlide}
            className='cursor-pointer text-[14px] leading-[14px] pr-1 mr-[1px]'
          >
            next
          </li>
          <li
            onClick={handleDisplay}
            className={
              slideShow
                ? 'hidden'
                : 'h-[14px] w-fit cursor-pointer text-[13px] leading-[14px] pr-1 ml-[10px]'
            }
          >
            + gallery
          </li>
          <li
            onClick={handleDisplay}
            className={
              slideShow
                ? 'h-[14px] cursor-pointer text-[13px] leading-[14px] pr-1 ml-[10px]'
                : 'hidden'
            }
          >
            - gallery
          </li>
        </ul>
        <div className='flex w-[50%] justify-end'>
          <div className='cursor-default text-[14px] leading-[14px]'>
            {imageNum}/{images.length}
          </div>
        </div>
      </div>
      <div id='current-slide' className={slideShow ? 'hidden' : ''}>
        <Image
          onClick={plusSlide}
          className='w-fit max-h-[80vh] cursor-pointer'
          src={images[imageNum - 1]}
          alt='/'
          width={1400}
          height={933}
        />
      </div>
      <div
        id='gallery'
        className={
          slideShow ? 'grid grid-cols-3 gap-3 max-w-[900px] pb-14' : 'hidden'
        }
      >
        {images.map((each, index) => (
          <div
            key={index}
            className='cursor-pointer'
            onClick={() => {
              imageCounter(index + 1);
              changeDisplay((slideShow) => !slideShow);
            }}
          >
            <Image
              src={each}
              alt='/'
              width={400}
              height={400}
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
