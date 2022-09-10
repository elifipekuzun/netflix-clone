import { MongoClient } from 'mongodb';

export const getClient = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://elifipek:588647elka@cluster0.bmoow.mongodb.net/netflix?retryWrites=true&w=majority'
  );
  if (!client) {
    throw new Error('Could not connected to database');
  }
  return client;
};
