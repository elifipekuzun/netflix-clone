import React from 'react';
import styles from './preview-modal.module.css';
import VolumeIcon from '@mui/icons-material/VolumeUp';
import AddIcon from '@mui/icons-material/Add';
import Tumbup from '@mui/icons-material/ThumbUp';
import CloseIcon from '@mui/icons-material/Close';
import { Fade, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Movie } from '../../types/Movie';
import Modal from '@mui/material/Modal';
import classNames from 'classnames';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import { PlayButton } from '../ui/play-button';

export const PreviewModal: React.FC<{
  video: Movie;
  isModalVisible: boolean;
  closeRequest: () => void;
  onBackdropClick: () => void;
}> = ({ video, isModalVisible, closeRequest, onBackdropClick }) => {
  return (
    <Modal
      sx={{ height: '100%', overflow: 'scroll' }}
      open={isModalVisible}
      onClose={onBackdropClick}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalVisible}>
        <div className={styles.box}>
          <div className={styles['player-image']}>
            <img
              src={
                'https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQv2TDBhz9WgoeoiqCU2b-xx468Boh-g5y65nQuRXBZZQQwRy2gmHErE-2bjfg_pCLg-otJLAxu7ar9QU8X2vg2EKEv9FhNUyDhP.webp?r=14f'
              }
              alt={video.title}
            />
            <div className={styles['title-icons']}>
              <Typography
                id="transition-modal-title"
                variant="h4"
                sx={{ marginLeft: 5 }}
                component="h2"
              >
                {video.title}
              </Typography>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <PlayButton onClick={() => {}} title="Play" bgColor="white">
                    <PlayArrowRounded sx={{ fontSize: 28 }} />
                  </PlayButton>
                  <button className={styles.button}>
                    <AddIcon />
                  </button>
                  <button className={styles.button}>
                    <Tumbup />
                  </button>
                </div>
                <div>
                  <button className={classNames(styles.button, styles.volume)}>
                    <VolumeIcon />
                  </button>
                </div>
              </div>
            </div>
            <button
              className={classNames(styles.button, styles.close)}
              onClick={closeRequest}
            >
              <CloseIcon sx={{ fontSize: 20, color: 'white' }} />
            </button>
          </div>
          <div className={styles.content}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {video.description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Actors: {video.actor}
            </Typography>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
