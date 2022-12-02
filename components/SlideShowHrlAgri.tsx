import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

// gallery
const images = [
  '/images/hrl-agri/img1.jpg',
  '/images/hrl-agri/img2.jpg',
  '/images/hrl-agri/img3.jpg',
  '/images/hrl-agri/img4.jpg',
  '/images/hrl-agri/img5.jpg',
  '/images/hrl-agri/img6.jpg',
  '/images/hrl-agri/img7.jpg',
  '/images/hrl-agri/img8.jpg',
  '/images/hrl-agri/img9.jpg',
  '/images/hrl-agri/img10.jpg',
  '/images/hrl-agri/img11.jpg',
  '/images/hrl-agri/img12.jpg',
  '/images/hrl-agri/img13.jpg',
  '/images/hrl-agri/img14.jpg',
  '/images/hrl-agri/img15.jpg',
  '/images/hrl-agri/img16.jpg',
  '/images/hrl-agri/img17.jpg',
  '/images/hrl-agri/img18.jpg',
];
//slideshow

const SlideShow = () => {
  const [imageNum, imageCounter] = useState(1);

  const plusSlide = () => {
    if (imageNum > images.length - 1) {
      imageCounter(1);
    } else {
      imageCounter(imageNum + 1);
    }

    console.log(imageNum);
  };

  const minusSlide = () => {
    if (imageNum < 2) {
      imageCounter(images.length);
    } else {
      imageCounter(imageNum - 1);
    }
  };

  const [slideShow, changeDisplay] = useState(false);

  const handleDisplay = () => {
    changeDisplay((slideShow) => !slideShow);
  };

  return (
    <div
      id='slideshow-container'
      className='ml-[360px] mt-[60px] mr-[60px] w-fit h-fit  relative'
    >
      <div className='flex pb-1'>
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
                : 'h-[14px] cursor-pointer text-[13px] leading-[14px] pr-1 ml-[10px]'
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
          src={`/../public` + images[imageNum - 1]}
          alt='/'
          width={1400}
          height={933}
          priority={true}
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
