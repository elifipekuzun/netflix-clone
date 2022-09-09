import React, { useState } from 'react';
import styles from './preview-modal.module.css';
import Button from '@mui/material/Button';
import VolumeIcon from '@mui/icons-material/VolumeUp';
import AddIcon from '@mui/icons-material/Add';
import Tumbup from '@mui/icons-material/ThumbUp';
import CloseIcon from '@mui/icons-material/Close';
import { Fade, Box, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Movie } from '../../types/Movie';
import Modal from '@mui/material/Modal';
import classNames from 'classnames';

export const PreviewModal: React.FC<{
  video: Movie;
  isModalVisible: boolean;
  closeRequest: () => void;
}> = ({ video, isModalVisible, closeRequest }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    display: 'block',
    alignItems: 'center',
    bgcolor: '#141414',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={isModalVisible}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalVisible}>
        <Box sx={style}>
          <div className={styles['player-image']}>
            <img
              src={
                'https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcIrX2arGSK_A1KR2buSiR1kd9G3Ja6XveENAThuTxVr3i-JTKQ8WD0zuu72OyUP_maVUP16bR6YzUYP-_SfbZYwxDLH9ArxAaD5.webp?r=9d3'
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
                  <Button
                    variant={'contained'}
                    sx={{
                      bgcolor: 'white',
                      color: '#141414',
                      width: '50%',
                      my: 2,
                    }}
                  >
                    Play
                  </Button>
                  <button className={styles.button}>
                    <AddIcon />
                  </button>
                  <button className={styles.button}>
                    <Tumbup sx={{ color: 'gray' }} />
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
        </Box>
      </Fade>
    </Modal>
  );
};
