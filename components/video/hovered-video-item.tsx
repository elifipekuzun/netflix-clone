import React from 'react';
import { Movie } from '../../types/Movie';
import PlayIcon from '@mui/icons-material/PlayCircle';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import styles from './hovered-video-item.module.css';

export const HoveredVideoItem: React.FC<{ video: Movie }> = ({ video }) => {
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

  return (
    <div className={styles.hovered}>
      <p>{video.title}</p>
      <p>{video.runtime}</p>
      <div className={styles.actions}>
        <div className={styles.action}>
          <IconButton sx={{ margin: 0, paddingLeft: 1 }}>
            <PlayIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
          <IconButton sx={{ margin: 0, padding: 0 }}>
            <AddIcon sx={{ color: 'white', fontSize: 30, opacity: 0.7 }} />
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
          <IconButton sx={{ margin: 0 }}>
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
