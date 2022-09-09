import React, { useState } from 'react';
import { Movie } from '../../types/Movie';
import styles from './video-item.module.css';
import { HoveredVideoItem } from './hovered-video-item';
import classNames from 'classnames';
import { Paper } from '@mui/material';
import { PreviewModal } from './preview-modal';

export const VideoItem: React.FC<{ video: Movie }> = ({ video }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [modalClicked, setModalClicked] = useState<boolean>(false);

  const classes = classNames(styles.mainitem, isHovering ? styles.hovered : '');

  return (
    <>
      <Paper
        sx={{
          background: '#141414',
          borderColor: '#141414',
        }}
        elevation={isHovering ? 8 : 0}
        className={classes}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={styles.innerFrame}>
          <div className={styles.item}>
            <img src={video.image} alt={video.title} />
          </div>
          {isHovering && (
            <HoveredVideoItem
              video={video}
              onClickMoreInfo={() => {
                setModalClicked(true);
              }}
            />
          )}
        </div>
        <PreviewModal
          isModalVisible={modalClicked}
          video={video}
          closeRequest={() => setModalClicked(false)}
        />
      </Paper>
    </>
  );
};
