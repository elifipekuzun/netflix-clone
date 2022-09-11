import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';
import { MyListVideos } from '../../components/video/my-list-videos';

const MyListPage: NextPage = () => {
  return (
    <Layout>
      <MyListVideos />
    </Layout>
  );
};

export default MyListPage;
