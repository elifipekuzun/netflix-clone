import { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

type ReqBodyParams = {
  email: string;
  password: string;
};

export type ResponseData = {
  message: string;
  user?: {};
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === 'POST') {
    const { email, password } = req.body as ReqBodyParams;

    const client = await getClient();

    const existingUser = await client
      .db()
      .collection('users')
      .findOne({ email });
    if (existingUser) {
      res.status(422).json({ message: 'This email is already in use!' });
      return;
    }
    const hashedPassword = await hashPassword(password);
    const result = await client
      .db()
      .collection('users')
      .insertOne({ email, password: hashedPassword });

    client.close();
    res
      .status(200)
      .json({
        message: 'Success!',
        user: { email, _id: result.insertedId.toString() },
      });
  }
};

export default handler;
