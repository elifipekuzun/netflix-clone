import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styles from './main-navigation.module.css';
import Image from 'next/image';
import Notifications from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import { SearchBar } from '../ui/search-bar';
import { Submenu } from './submenu';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import { signOut } from 'next-auth/react';
import { UserContext } from '../../store/user-context';

export const MainNavigation: React.FC = () => {
  const { setUser, setSelectedProfile } = useContext(UserContext);
  const [pos, setPos] = useState<number>(0);

  const scrollHandler = () => {
    const position = window.scrollY;
    setPos(position);
  };

  const logoutHandler = async () => {
    await signOut();
    setSelectedProfile(undefined);
    setUser(undefined);
    window.location.href = '/';
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, pos === 0 ? styles.transparant : '')}
    >
      <section className={styles.navLeft}>
        <Link href={'/browse'}>
          <a className={styles.logo}>
            <Image
              src={'/images/logo/logo.png'}
              alt={'Netflix'}
              width={93}
              height={30}
              priority
            />
          </a>
        </Link>
        <nav>
          <div className={styles.browse}>
            <a>Browse</a>
            <Submenu className={styles['browse-submenu']}>
              <>
                <a href={'#'}>Home</a>
                <a href={'#'}>Tv Series</a>
                <a href={'#'}>Movies</a>
                <a href={'#'}>Latest</a>
                <a href={'#'}>My List</a>
              </>
            </Submenu>
          </div>
          <ul>
            <li>
              <Link href={'/browse'}>Home</Link>
            </li>
            <li>
              <Link href={'/browse/genre/tv-series'}>Tv Series</Link>
            </li>
            <li>
              <Link href={'/browse/genre/movies'}>Movies</Link>
            </li>
            <li>
              <Link href={'/browse/latest'}>Latest</Link>
            </li>
            <li>
              <Link href={'/browse/my-list'}>My List</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.navRight}>
        <div>
          <SearchBar />
        </div>
        <div className={styles.kids}>
          <Link href={'/kids'} style={{ padding: 30 }}>
            Kids
          </Link>
        </div>
        <div className={styles['nav-item']}>
          <Badge badgeContent={2} color="error">
            <Notifications
              className={styles.icons}
              sx={{ color: 'white', fontSize: 32 }}
              style={{ marginLeft: 20 }}
            />
          </Badge>
          <Submenu className={styles.submenu}>
            <a>
              <img
                src={
                  'https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWCvNzpWS68Mi_I6Rh8VjsTGYm_tc3oLgLIKfYE4lfLzSZli4um-JzzLBxQQxKHFUitghRFsPIqmgcLVEOOt3D86JS3JjE0KsMfTOPNYvpFSHdjDWC-GyK8whZ_PjvLKS8_N.jpg?r=199'
                }
                alt="notification"
              />
              <h4>Now streaming season 3.</h4>
            </a>
          </Submenu>
        </div>
        <div className={styles.avatar}>
          <Avatar sx={{ marginLeft: 5 }} />
          <Submenu className={styles['avatar-submenu']}>
            <button onClick={logoutHandler}>Logout</button>
          </Submenu>
        </div>
      </section>
    </header>
  );
};
