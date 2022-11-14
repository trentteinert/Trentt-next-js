import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BioText from '../components/navcomponents/bioText';
import SlideshowDisq from '../components/SlideShowDisq';

export default function Disquiet() {
  return (
    <>
      <Head>
        <title>Harlingen Agri</title>
      </Head>
      <SlideshowDisq />
    </>
  );
}
