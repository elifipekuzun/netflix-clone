import React, { PropsWithChildren } from 'react';
import { MainNavigation } from './main-navigation';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
