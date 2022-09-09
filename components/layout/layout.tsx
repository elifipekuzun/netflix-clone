import React, { PropsWithChildren } from 'react';
import { MainNavigation } from './main-navigation';
import { Footer } from './footer';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
