import React, { useContext } from 'react';
import { VideoItem } from './video-item';
import { UserContext } from '../../store/user-context';

export const MyListVideos: React.FC = () => {
  const { myList } = useContext(UserContext);

  return (
    <div style={{ padding: 64, zIndex: 10 }}>
      <h2>My List</h2>
      {myList.map((movie) => {
        return (
          <div key={movie._id} style={{ minHeight: 200 }}>
            <VideoItem video={movie} />
          </div>
        );
      })}
    </div>
  );
};
