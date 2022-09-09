import React from 'react';
import Link from 'next/link';
import styles from './main-navigation.module.css';
import Image from 'next/image';
import Notifications from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import { SearchBar } from '../ui/search-bar';
import { Submenu } from './submenu';

export const MainNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.navLeft}>
        <Link href={'/browse'}>
          <a className={styles.logo}>
            <Image
              src={'/images/logo/logo.png'}
              alt={'Netflix'}
              width={93}
              height={30}
            />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={'/browse/genre/home'}>Home</Link>
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
              <Link href={'/browse/genre/my-list'}>My List</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.navRight}>
        <div>
          <SearchBar />
        </div>
        <Link href={'/kids'} style={{ padding: 30 }}>
          Kids
        </Link>
        <div className={styles['nav-item']}>
          <Badge badgeContent={2} color="error">
            <Notifications
              className={styles.icons}
              sx={{ color: 'white', fontSize: 32 }}
              style={{ marginLeft: 20 }}
            />
          </Badge>
          <Submenu className={styles.submenu} />
        </div>
      </section>
    </header>
  );
};
