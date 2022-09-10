import React from 'react';
import styles from './slider-header.module.css';
import { Pagination } from '../ui/pagination';

export const SliderHeader: React.FC<{
  genre: string;
  paginationNumber: number;

  paginationClass: string;
  activePage: number;
}> = ({ genre, paginationNumber, paginationClass, activePage }) => {
  return (
    <div className={styles.rowHeader}>
      <h2>
        <a className={styles.rowTitle}>
          <div className={styles.rowHeaderTitle}>{genre}</div>
        </a>
      </h2>
      <div className={paginationClass}>
        <Pagination pageNumber={paginationNumber} activePage={activePage} />
      </div>
    </div>
  );
};
