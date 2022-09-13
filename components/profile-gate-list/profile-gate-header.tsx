import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './profile-gate-header.module.css';

export const ProfileGateHeader: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles['logo-container']}>
          <Image
            src={'/images/logo/logo.png'}
            alt="Netflix logo"
            width={70}
            height={29}
            priority
          />
        </div>
      </div>
      <div className={styles['profiles-gate-container']}>
        <div className={styles['centered-profiles-container']}>{children}</div>
      </div>
    </div>
  );
};
