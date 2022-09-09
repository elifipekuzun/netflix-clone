import React from 'react';

export const Submenu: React.FC<{ className: string }> = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a>Notification 1</a>
      </li>
      <li>
        <a>Notification 2</a>
      </li>
      <li>
        <a>Notification 3</a>
      </li>
    </ul>
  );
};
