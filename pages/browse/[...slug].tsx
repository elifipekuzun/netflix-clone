import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ProfileGateList } from '../../components/profile-gate-list/profile-gate-list';
import { ProfileGateHeader } from '../../components/profile-gate-list/profile-gate-header';
import { getClient } from '../../lib/db';
import { AddProfile } from '../../components/profile-gate-list/add-profile';
import { getSession } from 'next-auth/react';
import { User } from '../../types/User';
import { Layout } from '../../components/layout/layout';
import { MyListVideos } from '../../components/video/my-list-videos';
import { ManageProfileForm } from '../../components/profile-gate-list/manage-profile-form';

const EditProfilesPage: NextPage<{ user: User }> = ({ user }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug?.length) {
    return <h1 className="center">Loading...</h1>;
  }

  return (
    <>
      {slug[0] === 'manage-profiles' && (
        <ProfileGateList
          title="Manage Profiles"
          buttonTitle="Okay"
          addHref=""
          user={user}
          style={{
            background: '#fff',
            border: 'none',
            color: '#000',
            fontWeight: '700',
          }}
        />
      )}
      {slug[0] === 'add-profile' && (
        <ProfileGateHeader>
          <AddProfile onClickCancel={() => router.back()} />
        </ProfileGateHeader>
      )}
      {slug[0] === 'my-list' && (
        <Layout>
          <MyListVideos />
        </Layout>
      )}
      {slug[1] && slug[0] === 'manage-profiles' && <ManageProfileForm />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session || !session.user || !session.user.email) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const client = await getClient();
  const user = await client
    .db()
    .collection('users')
    .findOne({ email: session.user.email });
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  client.close();
  return {
    props: {
      user: { ...user, _id: user._id.toString() } as User,
    },
  };
};

export default EditProfilesPage;
