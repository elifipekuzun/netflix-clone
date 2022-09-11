import React, { PropsWithChildren, useState } from 'react';
import { User, UserProfile } from '../types/User';
import { Movie } from '../types/Movie';

type UserContextProps = {
  user: User | undefined;
  selectedProfile: UserProfile | undefined;
  setUser: (userInfo: User | undefined) => void;
  setSelectedProfile: (profile: UserProfile | undefined) => void;
  myList: Movie[];
  addToList: (movie: Movie) => void;
  removeFromList: (movieId: string) => void;
};

export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  selectedProfile: undefined,
  setUser(userInfo: User | undefined) {},
  setSelectedProfile(profile: UserProfile | undefined) {},
  myList: [],
  addToList(movie: Movie) {},
  removeFromList(movieId) {},
});
export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<User>();
  const [selectedProfile, setProfile] = useState<UserProfile>();
  const [userList, setUserList] = useState<Movie[]>([]);

  const setUser = (user: User | undefined) => {
    setUserInfo(user);
  };

  const setSelectedProfile = (profile: UserProfile | undefined) => {
    setProfile(profile);
  };

  const addToList = (movie: Movie) => {
    setUserList([...userList, movie]);
  };

  const removeFromList = (movieId: string) => {
    const updatedList = userList.filter((movie) => movie._id !== movieId);
    setUserList(updatedList);
  };

  return (
    <UserContext.Provider
      value={{
        user: userInfo,
        setUser,
        selectedProfile,
        setSelectedProfile,
        addToList,
        removeFromList,
        myList: userList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
