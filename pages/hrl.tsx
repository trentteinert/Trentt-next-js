import Head from 'next/head';

import SlideShowHrl from '../components/SlideShowHrl';
import ScrollImage from '../components/mobileImages/ScrollImageHrl';

export default function Hrl() {
  return (
    <>
      <Head>
        <title>Harlingen</title>
      </Head>
      <div className='slide-show'>
        <SlideShowHrl />
      </div>
      <div className='slide-show-mobile'>
        <ScrollImage />
      </div>
    </>
  );
}
