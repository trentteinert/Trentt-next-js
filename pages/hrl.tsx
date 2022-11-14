import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SlideShowHrl from '../components/SlideShowHrl';
import BioText from '../components/navcomponents/bioText';

export default function Hrl() {
  return (
    <>
      <Head>
        <title>Harlingen</title>
      </Head>
      <SlideShowHrl />
    </>
  );
}
