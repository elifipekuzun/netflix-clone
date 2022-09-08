import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/browse');
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Loading ...</h1>
    </div>
  );
};

export default Home;
