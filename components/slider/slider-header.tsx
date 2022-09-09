import React from 'react';
import styles from './slider-header.module.css';

export const SliderHeader: React.FC<{ genre: string }> = ({ genre }) => {
  return (
    <div className={styles.rowHeader}>
      <h2>
        <a className={styles.rowTitle}>
          <div className={styles.rowHeaderTitle}>{genre}</div>
        </a>
      </h2>
    </div>
  );
};
