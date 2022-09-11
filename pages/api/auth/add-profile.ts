import { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '../../../lib/db';
import { ObjectId } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { profileName, id, avatarUrl } = req.body;
    if (!profileName || profileName.length === 0) {
      res.status(422).json({ message: 'Please enter a name!' });
      return;
    }

    const client = await getClient();
    const user = await client
      .db()
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    if (!user) {
      res.status(404).json({ message: 'User is not found!' });
      return;
    }
    const userProfiles = user.profiles;
    if (userProfiles.length > 3) {
      res.status(422).json({ message: 'You can have maximum 4 profiles!' });
      return;
    }
    const updatedProfileList = [...userProfiles, { profileName, avatarUrl }];
    await client
      .db()
      .collection('users')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { profiles: updatedProfileList } }
      );
    client.close();
    res.status(200).json({ message: 'Success!' });
  }
};

export default handler;
