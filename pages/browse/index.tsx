import { NextPage, GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';
import { VideoSlider } from '../../components/slider/video-slider';
import { Movie } from '../../types/Movie';
import { BillboardRow } from '../../components/billboard/billboard-row';
import { getClient } from '../../lib/db';
import { Layout } from '../../components/layout/layout';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { ProfileGateList } from '../../components/profile-gate-list/profile-gate-list';
import { UserContext } from '../../store/user-context';
import { User } from '../../types/User';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BrowsePage: NextPage<{ videos: Movie[] | undefined; user: User }> = ({
  videos,
  user,
}) => {
  const { selectedProfile, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(user);
  }, []);
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <h1 className="center">Loading...</h1>;
  }

  if (status === 'unauthenticated') {
    window.location.href = '/';
  }

  return (
    <>
      <Head>
        <title>Netflix-Browse</title>
      </Head>
      {selectedProfile ? (
        <Layout>
          <BillboardRow video={videos![0]} />
          {videos && <VideoSlider videos={videos} genre={'Comedies'} />}
          {videos && <VideoSlider videos={videos} genre={'Actions'} />}
          {videos && <VideoSlider videos={videos} genre={'Dramas'} />}
        </Layout>
      ) : (
        <ProfileGateList
          title="Who's watching?"
          buttonTitle="Manage Profiles"
          addHref="manage-profiles"
          user={user}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  videos: Movie[];
}> = async (context) => {
  const session = await getSession({ req: context.req });
  const client = await getClient();
  if (!client) {
    return {
      notFound: true,
    };
  }
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const user = await client
    .db()
    .collection('users')
    .findOne({ email: session.user?.email });
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const updatedUser = { ...user, _id: user._id.toString() };

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
      user: updatedUser,
    },
  };
};

export default BrowsePage;
