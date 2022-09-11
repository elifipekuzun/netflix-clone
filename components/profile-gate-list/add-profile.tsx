import React, { useRef, useContext, useState } from 'react';
import styles from './add-profile.module.css';
import classNames from 'classnames';
import { UserContext } from '../../store/user-context';
import { CustomBackdrop } from '../ui/backdrop';
import { useRouter } from 'next/router';

const avatarUrl =
  'https://occ-0-3467-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4';
export const AddProfile: React.FC<{
  onClickCancel: () => void;
}> = ({ onClickCancel }) => {
  const { user } = useContext(UserContext);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  const router = useRouter();

  const createProfileHandler = async () => {
    const profileName = nameInputRef.current && nameInputRef.current.value;
    setIsLoading(true);
    const res = await fetch('/api/auth/add-profile', {
      method: 'POST',
      body: JSON.stringify({ profileName, avatarUrl, id: user?._id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.message !== 'Success!') {
      console.log(data.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    onClickCancel();
    router.push('/browse');
  };

  return (
    <>
      {isLoading && <CustomBackdrop open={isLoading} />}
      <div className={styles['profile-actions-container']}>
        <h1>Add Profile</h1>
        <h2>Add profile for another person who watches Netflix.</h2>
        <div className={styles['profile-entry']}>
          <div className={styles['profile-avatar']}>
            <img src={avatarUrl} alt="profile-avatar" />
          </div>
          <div className={styles['profile-add']}>
            <div className={styles['profile-entry-input']}>
              <input
                type={'text'}
                id={'add-profile-name'}
                placeholder={'Name'}
                ref={nameInputRef}
              />
            </div>
          </div>
        </div>
        <span
          className={classNames(styles['profile-button'], styles.preffered)}
          onClick={() => {
            createProfileHandler();
          }}
        >
          Next
        </span>
        <span className={styles['profile-button']} onClick={onClickCancel}>
          Cancel
        </span>
      </div>
    </>
  );
};
