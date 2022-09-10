import React from 'react';
import styles from './pagination.module.css';
import classNames from 'classnames';

export const Pagination: React.FC<{
  pageNumber: number;
  activePage: number;
}> = ({ pageNumber, activePage }) => {
  const pageArray = new Array(pageNumber).fill(0).map((_, i) => {
    return { id: i.toString() };
  });

  return (
    <>
      {pageArray.map((page) => {
        return (
          <div
            key={page.id}
            className={classNames(
              styles.page,
              activePage === +page.id ? styles.active : ''
            )}
          />
        );
      })}
    </>
  );
};
