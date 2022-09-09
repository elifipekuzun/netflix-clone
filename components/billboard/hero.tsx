import React from 'react';
import styles from './hero.module.css';
import classNames from 'classnames';

export const Hero: React.FC = () => {
  return (
    <>
      <div className={styles['image-wrapper']}>
        <img
          src="https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfJYSubnyaGaSL_ANwS9OdqZZQq-XJvoAnptr2879Gx70XNrUOwvuSDoV4kHHRwSQsvUCVklVgoKnPPL6cBqAoq_fkCqrD_DL1qT.webp?r=46f"
          alt="hero-image"
        />
        <div
          className={classNames(
            styles['trailer-vignette'],
            styles['vignette-layer']
          )}
        ></div>
        <div
          className={classNames(
            styles['hero-vignette'],
            styles['vignette-layer']
          )}
        ></div>
        <div className={styles['evidence-immersive-vignette']}></div>
      </div>
    </>
  );
};
