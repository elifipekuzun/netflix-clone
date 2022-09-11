import { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '../../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const client = await getClient();
    const user = await client.db().collection('users').findOne({ email });
    if (!user) {
      res.status(404).json({ message: 'User is not found!' });
      return;
    }
    client.close();
    res.status(200).json({ message: 'Success!', user });
  }
};

export default handler;
