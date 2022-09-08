import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { PropsWithChildren } from 'react';
import styles from './arrow-slider.module.css';

type ArrowSliderProps = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
};

export const ArrowSlider: React.FC<PropsWithChildren<ArrowSliderProps>> = ({
  children,
  onScrollLeft,
  onScrollRight,
}) => {
  return (
    <div className={styles.arrows}>
      <div className={styles['arrow-left']}>
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
  );
};
