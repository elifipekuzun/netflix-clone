import React from 'react';
import Link from 'next/link';
import Facebook from '@mui/icons-material/FacebookTwoTone';
import Intagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <Link href={'#'}>
            <a>
              <li>
                <Facebook sx={{ color: 'white', fontSize: 28 }} />
              </li>
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <li>
                <Intagram sx={{ color: 'white', fontSize: 28 }} />
              </li>
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <li>
                <Twitter sx={{ color: 'white', fontSize: 28 }} />
              </li>
            </a>
          </Link>
          <Link href={'#'}>
            <a>
              <li>
                <Youtube sx={{ color: 'white', fontSize: 28 }} />
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
