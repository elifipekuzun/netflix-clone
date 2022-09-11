export type UserProfile = {
  avatarUrl: string;
  profileName: string;
};

export interface User {
  _id: string;
  email: string;
  password: string;
  profiles: UserProfile[];
}
