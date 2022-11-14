import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SlideShowHrlAgri from '../components/SlideShowHrlAgri';
import BioText from '../components/navcomponents/bioText';

export default function HrlAgri() {
  return (
    <>
      <Head>
        <title>Harlingen Agri</title>
      </Head>
      <SlideShowHrlAgri />
    </>
  );
}
