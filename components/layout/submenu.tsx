import React, { PropsWithChildren } from 'react';
import styles from './submenu.module.css';

export const Submenu: React.FC<PropsWithChildren<{ className: string }>> = ({
  className,
  children,
}) => {
  return (
    <div className={styles.container}>
      <ul className={className}>
        <li>
          <div>{children}</div>
        </li>
      </ul>
    </div>
  );
};
