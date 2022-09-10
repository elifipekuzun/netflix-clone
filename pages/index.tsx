import type { NextPage, GetServerSideProps } from 'next';
import { AuthForm } from '../components/auth/auth-form';
import { getSession } from 'next-auth/react';

const Home: NextPage<{ status: string }> = ({ status }) => {
  if (status !== 'unauthenticated') {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <AuthForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/browse',
        permanent: false,
      },
    };
  }
  return {
    props: {
      status: 'unauthenticated',
    },
  };
};

export default Home;
