import React from 'react';
import styles from './billboard-row.module.css';
import classNames from 'classnames';
import { Hero } from './hero';
import { InfoLayer } from './billboard-info-layer';

export const BillboardRow: React.FC = () => {
  return (
    <div className={styles['billboard-row']}>
      <div className={classNames(styles['billboard-row'], styles.billboard)}>
        <Hero />
        <div className={styles['fill-container']}>
          <InfoLayer />
        </div>
      </div>
    </div>
  );
};
