import React, { useContext, useEffect, useState } from 'react';
import { Movie } from '../../types/Movie';
import PlayIcon from '@mui/icons-material/PlayCircle';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddIcon from '@mui/icons-material/AddCircle';
import CheckedIcon from '@mui/icons-material/CheckCircleRounded';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import styles from './hovered-video-item.module.css';
import { UserContext } from '../../store/user-context';

export const HoveredVideoItem: React.FC<{
  video: Movie;
  onClickMoreInfo: () => void;
}> = ({ video, onClickMoreInfo }) => {
  const { addToList, myList, removeFromList } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: 'white',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'black',
    },
  }));

  useEffect(() => {
    const isExist = myList.find((item) => item._id === video._id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <div className={styles.hovered}>
      <p>{video.title}</p>
      <p>{video.runtime}</p>
      <div className={styles.actions}>
        <div className={styles.action}>
          <IconButton sx={{ margin: 0, paddingLeft: 1 }}>
            <PlayIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
          <IconButton
            sx={{ margin: 0, padding: 0 }}
            onClick={() => {
              if (isFavorite) {
                removeFromList(video._id);
              } else {
                addToList(video);
              }

              setIsFavorite(!isFavorite);
            }}
          >
            {isFavorite ? (
              <CheckedIcon
                sx={{
                  color: 'white',
                  fontSize: 30,
                  opacity: 0.7,
                  bgcolor: 'transparent',
                }}
              />
            ) : (
              <AddIcon
                sx={{
                  color: 'white',
                  fontSize: 30,
                  opacity: 0.7,
                  bgcolor: 'transparent',
                }}
              />
            )}
          </IconButton>
          <IconButton sx={{ margin: 0, paddingLeft: 1 }}>
            <ThumbUpIcon
              sx={{
                color: 'white',
                fontSize: 26,
                fontWeight: '200',
                opacity: 0.7,
              }}
            />
          </IconButton>
        </div>
        <div>
          <IconButton sx={{ margin: 0 }} onClick={onClickMoreInfo}>
            <StyledTooltip title="More Info" placement={'top'}>
              <ArrowDownIcon
                sx={{
                  color: 'white',
                  fontSize: 34,
                  fontWeight: '200',
                  opacity: 0.6,
                }}
              />
            </StyledTooltip>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
