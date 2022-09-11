import React, { PropsWithChildren, useState } from 'react';
import { User, UserProfile } from '../types/User';

type UserContextProps = {
  user: User | undefined;
  selectedProfile: UserProfile | undefined;
  setUser: (userInfo: User | undefined) => void;
  getUser: () => User | undefined;
  setSelectedProfile: (profile: UserProfile | undefined) => void;
  getSelectedProfile: () => UserProfile | undefined;
};

export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  selectedProfile: undefined,
  setUser(userInfo: User | undefined) {},
  getUser() {
    return this.user;
  },
  setSelectedProfile(profile: UserProfile | undefined) {},
  getSelectedProfile() {
    return this.selectedProfile;
  },
});
export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<User>();
  const [selectedProfile, setProfile] = useState<UserProfile>();

  const setUser = (user: User | undefined) => {
    setUserInfo(user);
  };

  const getUser = (): User | undefined => {
    return userInfo;
  };

  const setSelectedProfile = (profile: UserProfile | undefined) => {
    setProfile(profile);
  };

  const getSelectedProfile = () => {
    return selectedProfile;
  };

  return (
    <UserContext.Provider
      value={{
        user: userInfo,
        setUser,
        getUser,
        selectedProfile,
        getSelectedProfile,
        setSelectedProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
