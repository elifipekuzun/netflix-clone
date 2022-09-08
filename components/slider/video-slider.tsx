import React, { useRef } from 'react';
import { Movie } from '../../types/Movie';
import { VideoItem } from '../video/video-item';
import styles from './video-slider.module.css';
import { ArrowSlider } from './arrow-slider';

export const VideoSlider: React.FC<{ videos: Movie[]; genre: string }> = ({
  videos,
  genre,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  let genreVideos = videos.filter((video) => video.genre === genre);
  genreVideos = [
    ...genreVideos,
    genreVideos[0],
    genreVideos[0],
    genreVideos[0],
    genreVideos[0],
    genreVideos[0],
  ];

  const scrollLeftHandler = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth;
    }
  };
  const scrollRightHandler = () => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollWidth);

      scrollRef.current.scrollLeft += scrollRef.current.scrollWidth;
    }
  };

  return (
    <div className={styles.slider}>
      <h3>{genre}</h3>
      <ArrowSlider
        onScrollLeft={scrollLeftHandler}
        onScrollRight={scrollRightHandler}
      >
        <div className={styles.stack} ref={scrollRef}>
          {genreVideos.map((video, i) => {
            return <VideoItem video={video} key={i} />;
          })}
        </div>
      </ArrowSlider>
    </div>
  );
};
