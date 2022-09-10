import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getClient } from '../../../lib/db';
import { comparePassword } from '../../../lib/auth';

export default NextAuth({
  secret: 'AUTH_SECRET_KEY',
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials) {
        const client = await getClient();
        const existingUser = await client
          .db()
          .collection('users')
          .findOne({ email: credentials?.email });

        if (!existingUser || !existingUser._id) {
          client.close();
          throw new Error('No user found!');
        }
        if (!credentials?.password) {
          client.close();
          throw new Error('You have to pass in your password');
        }
        const isSame = await comparePassword(
          credentials?.password,
          existingUser.password
        );
        if (!isSame) {
          client.close();
          throw new Error('Wrong password!');
        }

        client.close();
        const user = { ...existingUser, _id: existingUser._id.toString() };
        return { user };
      },
    }),
  ],
});
