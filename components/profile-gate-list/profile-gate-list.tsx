import React from 'react';
import { ProfileGateItem } from './profile-gate-item';
import styles from './profile-gate-list.module.css';
import AddIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/router';
import { ProfileGateHeader } from './profile-gate-header';
import { User } from '../../types/User';

export const ProfileGateList: React.FC<{
  title: string;
  buttonTitle: string;
  addHref: string;
  style?: React.CSSProperties;
  user: User;
}> = ({ title, buttonTitle, addHref, style, user }) => {
  const router = useRouter();

  return (
    <>
      <ProfileGateHeader>
        <div className={styles['list-profiles']}>
          <h1>{title}</h1>
          <ul>
            {user?.profiles.map((item) => {
              return (
                <li key={item.profileName}>
                  <ProfileGateItem
                    avatar={item.avatarUrl}
                    name={item.profileName}
                    editMode={addHref === '' ? true : false}
                  />
                </li>
              );
            })}
            <li>
              <a>
                <div
                  className={styles['add-profile']}
                  onClick={() => router.push('/browse/add-profile')}
                >
                  <AddIcon
                    sx={{
                      fontSize: '2em',
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
        <span>
          <a
            href={`/browse/${addHref}`}
            className={styles['profile-button']}
            style={style}
          >
            {buttonTitle}
          </a>
        </span>
      </ProfileGateHeader>
    </>
  );
};
