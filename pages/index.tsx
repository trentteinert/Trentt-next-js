import Head from 'next/head';
import SlideShow from '../components/SlideShow';
import ScrollImage from '../components/mobileImages/ScrollImage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trent Teinert</title>
      </Head>
      <div className='slide-show'>
        <SlideShow />
      </div>
      <div className='slide-show-mobile'>
        <ScrollImage />
      </div>
    </>
  );
}
