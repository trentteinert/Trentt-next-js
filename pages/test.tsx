import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const test = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2022/11/28/13/32/13-32-10-248_960_720.jpg',
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

  const [imgCount, imageCounter] = useState(0);

  const imgPlus = () => {
    if (imgCount >= images.length - 1) {
      imageCounter(0);
    } else {
      imageCounter(imgCount + 1);
    }
  };

  return (
    <div className='ml-[360px] mt-[65px] w-[50%] max-h-[80vh] bg-blue-400 flex flex-col justify-start'>
      <button className='w-fit' onClick={imgPlus}>
        next
      </button>
      <div className='relative bg-green-400 w-[100%] mt-2'>
        <Image
          src={images[imgCount]}
          alt='/'
          width={1920}
          height={1080}
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default test;
