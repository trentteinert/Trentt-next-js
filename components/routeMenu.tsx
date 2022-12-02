import React from 'react';
import Link from 'next/link';
import styles from '../styles/routerMenu.module.css';
import { useRouter } from 'next/router';

const RouteMenu = () => {
  const router = useRouter();

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link
          className={router.pathname == '/' ? 'text-rose-300' : ''}
          href='/'
        >
          Now I lay me down to sleep
        </Link>
      </li>
      <li className={styles.li}>
        <Link
          className={router.pathname == '/hrl' ? 'text-rose-300' : ''}
          href='/hrl'
        >
          Harlingen
        </Link>
      </li>
      <li className={styles.li}>
        <Link
          className={router.pathname == '/hrl-agri' ? 'text-rose-300' : ''}
          href='/hrl-agri'
        >
          Harlingen AGRI
        </Link>
      </li>
      <li className={styles.li}>
        <Link
          className={router.pathname == '/disquiet' ? 'text-rose-300' : ''}
          href='/disquiet'
        >
          Disquiet
        </Link>
      </li>
    </ul>
  );
};

export default RouteMenu;
