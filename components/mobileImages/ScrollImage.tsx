import React from 'react';
import Image from 'next/image';

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

const ScrollImage = () => {
  return (
    <div>
      <div className='w-[95%] m-auto'>
        <div id='gallery' className={'grid grid-cols-1 gap-7 pt-5 pb-14'}>
          {images.map((each, index) => (
            <div key={index} className='cursor-pointer' onClick={() => {}}>
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
