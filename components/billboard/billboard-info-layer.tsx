import React from 'react';
import styles from './billboard-info-layer.module.css';
import { PlayButton } from '../ui/play-button';
import { PlayArrowRounded, InfoOutlined } from '@mui/icons-material';
import Chair from '@mui/icons-material/Chair';

export const InfoLayer: React.FC = () => {
  return (
    <div className={styles['info-layer']}>
      <div className={styles['logo-and-text']}>
        <div className={styles['billboard-title']}>
          <img
            src="https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQnKWwqzFWu4irxGoSesPglgSSKTZWOm-EXbtfTepG5rZtaET7QXUTgH7X_n9HmxYgiRA6odUkU-MGn62U1_Cs3TlT8jNP-WWtsP1UqFhJq5.webp?r=288"
            alt="bilboard-title"
          />
        </div>
        <div className={styles.info}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            repellendus obcaecati ducimus non iure, aut minus quo dolorem?
            Itaque animi sit provident est rerum consequatur dignissimos sint,
            sapiente ipsam voluptatem.
          </span>
        </div>
        <div className={styles.actions}>
          <PlayButton className={styles.button1} title="Play" bgColor="white">
            <PlayArrowRounded sx={{ fontSize: 28 }} />
          </PlayButton>
          <PlayButton title="More Info" bgColor="rgba(109, 109, 110, 0.7)">
            <InfoOutlined
              sx={{ fontSize: 28, color: 'white', fontWeight: '100' }}
            />
          </PlayButton>
        </div>
        <div className={styles.actors}>
          <div className={styles.actor}>
            <Chair />
            <div>Diane Lane</div>
          </div>
          <div className={styles.actor}>
            <Chair />
            <div>Diane Lane</div>
          </div>
          <div className={styles.actor}>
            <Chair />
            <div>Diane Lane</div>
          </div>
        </div>
      </div>
    </div>
  );
};
