import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/navcomponents/NavBar';
import ScrollButton from '../components/ScrollButton';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='nav-bar'>
        <NavBar />
      </div>
      <Component {...pageProps} />
      <div className='scroll-up'>
        <ScrollButton />
      </div>
    </>
  );
}
