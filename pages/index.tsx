import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SlideShow from '../components/SlideShow';
import BioText from '../components/navcomponents/bioText';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trent Teinert</title>
      </Head>
      <SlideShow />
    </>
  );
}
