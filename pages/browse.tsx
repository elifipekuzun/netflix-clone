import { NextPage, GetStaticProps } from 'next';
import { VideoSlider } from '../components/slider/video-slider';
import { Movie } from '../types/Movie';
import { MongoClient } from 'mongodb';
import { BillboardRow } from '../components/billboard/billboard-row';

const BrowsePage: NextPage<{ videos: Movie[] | undefined }> = ({ videos }) => {
  return (
    <>
      <BillboardRow />
      {videos && <VideoSlider videos={videos} genre={'Comedies'} />}
      {videos && <VideoSlider videos={videos} genre={'Actions'} />}
      {videos && <VideoSlider videos={videos} genre={'Dramas'} />}
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  videos: Movie[];
}> = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://elifipek:588647elka@cluster0.bmoow.mongodb.net/netflix?retryWrites=true&w=majority'
  );
  if (!client) {
    return {
      notFound: true,
    };
  }

  const movies = await client
    .db()
    .collection('movies')
    .find({ type: 'movie' })
    .toArray();

  client.close();
  let videos = movies.map((movie) => {
    return { ...movie, _id: movie._id.toString() } as Movie;
  });
  if (!videos) {
    return { notFound: true };
  }
  videos = [
    ...videos,
    videos[0],
    videos[1],
    videos[2],
    videos[3],
    videos[0],
    videos[1],
    videos[2],
    videos[3],
  ];

  return {
    props: {
      videos,
    },
  };
};

export default BrowsePage;
