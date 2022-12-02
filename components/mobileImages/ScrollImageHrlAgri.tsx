import React from 'react';
import Image from 'next/image';

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
const ScrollImage = () => {
  return (
    <div>
      <div className='w-[95%] m-auto'>
        <div id='gallery' className={'grid grid-cols-1 gap-7 pt-5 pb-14'}>
          {images.map((each, index) => (
            <div className='cursor-pointer' onClick={() => {}}>
              <Image
                src={each}
                alt='/'
                width={600}
                height={600}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollImage;
