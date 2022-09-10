import React from 'react';
import styles from './login-header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const LoginHeader = () => {
  return (
    <div className={styles.loginHeader}>
      <Link href={'/'}>
        <a className={styles.logo}>
          <Image
            height={45}
            width={167}
            src="/images/logo/logo.png"
            alt="Netflix logo"
          />
        </a>
      </Link>
    </div>
  );
};
