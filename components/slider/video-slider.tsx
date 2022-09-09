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
      const screenWidth = window.innerWidth;
      if (marginLeft > 0) {
        if (
          marginLeft + screenWidth >= screenWidth &&
          marginLeft >= screenWidth
        ) {
          setMarginLeft(marginLeft - screenWidth);
        } else {
          setMarginLeft(0);
        }
      } else {
        setMarginLeft(0);
      }
    }
  };
  const scrollRightHandler = () => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.clientWidth;
      const screenWidth = window.innerWidth;
      if (marginLeft + screenWidth < scrollWidth) {
        if (scrollWidth - (marginLeft + screenWidth) > screenWidth) {
          const scrollNum = marginLeft + screenWidth;
          setMarginLeft(scrollNum);
        } else {
          setMarginLeft(
            marginLeft + (scrollWidth - (marginLeft + screenWidth))
          );
        }
      } else {
        setMarginLeft(0);
      }
    }
  };

  return (
    <>
      <div className={styles.slider}>
        <ArrowSlider
          genre={genre}
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
              return <VideoItem video={video} key={video._id + '-' + i} />;
            })}
          </div>
        </ArrowSlider>
      </div>
    </>
  );
};
