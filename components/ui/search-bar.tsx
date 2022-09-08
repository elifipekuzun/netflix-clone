import React, { useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './search-bar.module.css';
import classnames from 'classnames';

export const SearchBar: React.FC = () => {
  const [isIconClicked, setIsIconCliked] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  isIconClicked && inputRef.current?.focus();

  const classNames = classnames(
    styles['search-box'],
    isIconClicked ? styles.active : ''
  );

  return (
    <div
      className={classNames}
      onClick={() => {
        setIsIconCliked(true);
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onBlur={() => setIsIconCliked(false)}
      />
      <div className={styles['search-btn']}>
        <SearchIcon sx={{ fontSize: 28 }} />
      </div>
    </div>
  );
};
