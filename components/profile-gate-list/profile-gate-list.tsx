import React, { useContext, useState } from 'react';
import { ProfileGateItem } from './profile-gate-item';
import styles from './profile-gate-list.module.css';
import AddIcon from '@mui/icons-material/AddCircle';
import { UserContext } from '../../store/user-context';
import { AddProfile } from './add-profile';
import { ProfileGateHeader } from './profile-gate-header';

export const ProfileGateList: React.FC = () => {
  const { user, setSelectedProfile } = useContext(UserContext);

  const [isAdding, setIsAdding] = useState<boolean>(false);

  return (
    <ProfileGateHeader>
      {isAdding ? (
        <AddProfile onClickCancel={() => setIsAdding(false)} />
      ) : (
        <div className={styles['list-profiles']}>
          <h1>Who is watching?</h1>
          <ul>
            {user?.profiles.map((item) => {
              return (
                <li
                  key={item.profileName}
                  onClick={() => setSelectedProfile(item)}
                >
                  <ProfileGateItem
                    avatar={item.avatarUrl}
                    name={item.profileName}
                  />
                </li>
              );
            })}
            <li>
              <a>
                <div
                  className={styles['add-profile']}
                  onClick={() => setIsAdding(true)}
                >
                  <AddIcon
                    sx={{
                      fontSize: 80,
                      fontStyle: 'normal',
                      fontVariant: 'normal',
                      fontWeight: '400',
                      lineHeight: 1,
                      textTransform: 'none',
                    }}
                  />
                </div>
                <span>Add Profile</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </ProfileGateHeader>
  );
};
