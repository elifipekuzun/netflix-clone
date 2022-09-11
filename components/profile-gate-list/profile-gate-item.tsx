import React from 'react';
import Link from 'next/link';
import styles from './profile-gate-item.module.css';

export const ProfileGateItem: React.FC<{ avatar: string; name: string }> = ({
  avatar,
  name,
}) => {
  return (
    <div className={styles['profile-item']}>
      <Link href={'/browse'}>
        <a>
          <div className={styles['avatar-wrapper']}>
            <div
              className={styles['profile-icon']}
              style={{
                backgroundImage: `url(${avatar})`,
              }}
            ></div>
          </div>
          <span>{name}</span>
        </a>
      </Link>
    </div>
  );
};
