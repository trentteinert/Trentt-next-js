import Link from 'next/link';
import React from 'react';
import styles from '../../styles/navBar.module.css';
import BioText from './bioText';
import { useState, useEffect, useRef } from 'react';
import RouteMenu from '../routeMenu';

const navBar = () => {
  const [bioText, changeBioText] = useState(false);
  const [menu, changeMenu] = useState(true);

  const handleBio = () => {
    changeBioText(!bioText);
    if (menu == true) {
      changeMenu(!menu);
    }
  };
  const handleMenu = () => {
    changeMenu(!menu);
    if (bioText == true) {
      changeBioText(!bioText);
    }
  };

  return (
    <div className={styles.container}>
      <Link className={styles.link} href='/'>
        <h1 className={styles.h1}>Trent Teinert</h1>
      </Link>
      <Link className={styles.link} href='/'>
        <h1 className={styles.p}>contact@trentteinert.com</h1>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <button
            className={bioText ? 'hidden' : 'w-[34px] text-right'}
            onClick={handleBio}
          >
            &#43; bio
          </button>
          <button
            className={bioText ? 'w-[34px] text-right' : 'hidden'}
            onClick={handleBio}
          >
            &#45; bio
          </button>
        </li>
        <li className={styles.li}>
          <div className='w-[27px]'>
            <Link href='/cv'>+ cv</Link>
          </div>
        </li>
        <li className={styles.li}>
          <button
            className={menu ? 'hidden' : 'w-[49px] text-right'}
            onClick={handleMenu}
          >
            &#43; menu
          </button>
          <button
            className={menu ? 'w-[49px] text-right' : 'hidden'}
            onClick={handleMenu}
          >
            &#45; menu
          </button>
        </li>
      </ul>
      <div id='biotext' className={bioText ? '' : 'hidden'}>
        <BioText />
      </div>
      <div id='menutext' className={menu ? '' : 'hidden'}>
        <RouteMenu />
      </div>
    </div>
  );
};

export default navBar;
