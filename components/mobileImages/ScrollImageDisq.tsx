import React from 'react';
import Image from 'next/image';

const images = [
  '/images/disq/img1.jpg',
  '/images/disq/img2.jpg',
  '/images/disq/img3.jpg',
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
