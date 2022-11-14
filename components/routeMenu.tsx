import React from 'react';
import Link from 'next/link';
import styles from '../styles/routerMenu.module.css';

const routeMenu = () => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link className={styles.link} href='/'>
          Now I lay me down to sleep
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href='/hrl'>
          Harlingen
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href='/hrl-agri'>
          Harlingen AGRI
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.link} href='/disquiet'>
          Disquiet
        </Link>
      </li>
    </ul>
  );
};

export default routeMenu;
