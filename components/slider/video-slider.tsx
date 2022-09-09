import React, { useRef, useState } from 'react';
import { Movie } from '../../types/Movie';
import { VideoItem } from '../video/video-item';
import styles from './video-slider.module.css';
import { ArrowSlider } from './arrow-slider';

export const VideoSlider: React.FC<{ videos: Movie[]; genre: string }> = ({
  videos,
  genre,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [marginLeft, setMarginLeft] = useState<number>(0);

  // let genreVideos = videos.filter((video) => video.genre === genre);
  // genreVideos = [
  //   ...genreVideos,
  //   genreVideos[0],
  //   genreVideos[0],
  //   genreVideos[0],
  //   genreVideos[0],
  //   genreVideos[0],
  // ];

  const scrollLeftHandler = () => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      const screenWidth = window.innerWidth;
      if (marginLeft + screenWidth < scrollWidth && marginLeft > 0) {
        const scrollNum = scrollWidth - (marginLeft + screenWidth);
        setMarginLeft(marginLeft - scrollNum);
      }
    }
  };
  const scrollRightHandler = () => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      const screenWidth = window.innerWidth;
      if (marginLeft + screenWidth < scrollWidth) {
        const scrollNum = scrollWidth - (marginLeft + screenWidth);
        setMarginLeft(marginLeft + scrollNum);
      } else {
        setMarginLeft(0);
      }
    }
  };

  return (
    <div className={styles.slider}>
      <h3>{genre}</h3>
      <ArrowSlider
        onScrollLeft={scrollLeftHandler}
        onScrollRight={scrollRightHandler}
        marginLeftValue={marginLeft}
      >
        <div
          className={styles.stack}
          ref={scrollRef}
          style={{ marginLeft: -marginLeft }}
        >
          {videos.map((video, i) => {
            return <VideoItem video={video} key={i} />;
          })}
        </div>
      </ArrowSlider>
    </div>
  );
};
