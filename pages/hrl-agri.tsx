import Head from 'next/head';
import SlideShowHrlAgri from '../components/SlideShowHrlAgri';
import ScrollImage from '../components/mobileImages/ScrollImageHrlAgri';

export default function HrlAgri() {
  return (
    <>
      <Head>
        <title>Harlingen Agri</title>
      </Head>
      <div className='slide-show'>
        <SlideShowHrlAgri />
      </div>
      <div className='slide-show-mobile'>
        <ScrollImage />
      </div>
    </>
  );
}
