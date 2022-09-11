import React, { PropsWithChildren } from 'react';
import { MainNavigation } from './main-navigation';
import { Footer } from './footer';
import styles from './layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout} style={{ overflowX: 'hidden' }}>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
