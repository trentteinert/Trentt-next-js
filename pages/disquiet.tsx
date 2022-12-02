import Head from 'next/head';

import SlideshowDisq from '../components/SlideShowDisq';

import ScrollImage from '../components/mobileImages/ScrollImageDisq';

export default function Disquiet() {
  return (
    <>
      <Head>
        <title>Harlingen Agri</title>
      </Head>
      <div className='slide-show'>
        <SlideshowDisq />
      </div>
      <div className='slide-show-mobile'>
        <ScrollImage />
      </div>
    </>
  );
}
