import React from 'react';
import Image from 'next/image';

const images = [
  '/images/hrl/img1.jpg',
  '/images/hrl/img2.jpg',
  '/images/hrl/img3.jpg',
  '/images/hrl/img4.jpg',
  '/images/hrl/img5.jpg',
  '/images/hrl/img6.jpg',
  '/images/hrl/img7.jpg',
  '/images/hrl/img8.jpg',
  '/images/hrl/img9.jpg',
  '/images/hrl/img10.jpg',
  '/images/hrl/img11.jpg',
  '/images/hrl/img12.jpg',
  '/images/hrl/img13.jpg',
  '/images/hrl/img14.jpg',
  '/images/hrl/img15.jpg',
  '/images/hrl/img16.jpg',
  '/images/hrl/img17.jpg',
  '/images/hrl/img18.jpg',
  '/images/hrl/img19.jpg',
  '/images/hrl/img20.jpg',
  '/images/hrl/img21.jpg',
  '/images/hrl/img22.jpg',
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
