import { hash, compare } from 'bcryptjs';

export const hashPassword = async (clientPassword: string) => {
  const hashedPass = await hash(clientPassword, 12);
  return hashedPass;
};

export const comparePassword = async (
  clientPassword: string,
  hashedPassword: string
) => {
  const isValid = await compare(clientPassword, hashedPassword);
  return isValid;
};
