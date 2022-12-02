import Link from 'next/link';
import React from 'react';
import styles from '../../styles/navBar.module.css';
import BioText from './bioText';
import { useState } from 'react';
import RouteMenu from '../routeMenu';

const NavBar = () => {
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
      <ul className=' flex w-fit'>
        <li className=' w-fit'>
          <button
            className={bioText ? 'hidden' : 'text-[14px] w-[fit] pr-2 '}
            onClick={handleBio}
          >
            &#43; bio
          </button>
          <button
            className={bioText ? 'text-[14px] w-[fit] pr-2' : 'hidden'}
            onClick={handleBio}
          >
            &#45; bio
          </button>
        </li>
        <li className=' w-fit'>
          <button className='text-[14px] w-[fit] pr-2'>
            <Link href='/cv'>+ cv</Link>
          </button>
        </li>
        <li className=' w-fit'>
          <button
            className={menu ? 'hidden' : 'text-[14px] w-[fit] pr-2'}
            onClick={handleMenu}
          >
            &#43; menu
          </button>
          <button
            className={menu ? 'text-[14px] w-[fit] pr-2' : 'hidden'}
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

export default NavBar;
