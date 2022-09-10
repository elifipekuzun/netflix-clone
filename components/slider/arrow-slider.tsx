import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { PropsWithChildren } from 'react';
import styles from './arrow-slider.module.css';
import classNames from 'classnames';
import { SliderHeader } from './slider-header';

type ArrowSliderProps = {
  marginLeftValue: number;
  genre: string;
  activePage: number;
  paginationNumber: number;
  onScrollLeft: () => void;
  onScrollRight: () => void;
};

export const ArrowSlider: React.FC<PropsWithChildren<ArrowSliderProps>> = ({
  children,
  genre,
  activePage,
  paginationNumber,
  onScrollLeft,
  onScrollRight,
  marginLeftValue,
}) => {
  const classesLeft = classNames(
    styles['arrow-left'],
    marginLeftValue === 0 ? styles.hidden : ''
  );

  return (
    <div className={styles['arrow-header']}>
      <SliderHeader
        genre={genre}
        activePage={activePage}
        paginationNumber={paginationNumber}
        paginationClass={styles.pagination}
      />
      <div className={styles.arrows}>
        <div className={classesLeft}>
          <IconButton onClick={onScrollLeft}>
            <ArrowBackIosNewIcon sx={{ fontSize: 32, color: 'white' }} />
          </IconButton>
        </div>
        {children}
        <div className={styles['arrow-right']}>
          <IconButton onClick={onScrollRight}>
            <ArrowForwardIosIcon sx={{ fontSize: 32, color: 'white' }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
