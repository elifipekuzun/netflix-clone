import { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';
import { VideoSlider } from '../components/slider/video-slider';
import { Movie } from '../types/Movie';
import { BillboardRow } from '../components/billboard/billboard-row';
import { getClient } from '../lib/db';
import { Layout } from '../components/layout/layout';
import { useSession } from 'next-auth/react';

const BrowsePage: NextPage<{ videos: Movie[] | undefined }> = ({ videos }) => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <h1 className="center">Loading...</h1>;
  }

  if (status === 'unauthenticated') {
    window.location.href = '/';
  }

  return (
    <Layout>
      <BillboardRow />
      {videos && <VideoSlider videos={videos} genre={'Comedies'} />}
      {videos && <VideoSlider videos={videos} genre={'Actions'} />}
      {videos && <VideoSlider videos={videos} genre={'Dramas'} />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  videos: Movie[];
}> = async () => {
  const client = await getClient();
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
