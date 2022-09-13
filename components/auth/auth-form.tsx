import React, { FormEvent, useState, useContext } from 'react';
import { LoginHeader } from './login-header';
import styles from './auth-form.module.css';
import { ResponseData } from '../../pages/api/auth/signup';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { CustomBackdrop } from '../ui/backdrop';
import { UserContext } from '../../store/user-context';

export const AuthForm: React.FC = () => {
  const { setUser } = useContext(UserContext);

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const router = useRouter();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (password.trim().length < 6) {
      return setErrorMessage('Password should have be at least 6 characters.');
    }

    setIsLoading(true);
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (!result?.ok) {
        setIsLoading(false);
        return;
      }
      const res = await fetch('/api/auth/user', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.message === 'Success!') {
        setUser(data.user);
      }

      router.replace('/browse');
    } else {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = (await res.json()) as ResponseData;
      if (data.message !== 'Success!') {
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      router.replace('/browse');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoading && <CustomBackdrop open={isLoading} />}
      <div className={styles['login-wrapper']}>
        <div className={styles['login-wrapper-bg']}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/1d1c14c2-a464-443b-9e0b-6b56961994ca/TR-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="auth-image"
          />
        </div>
        <LoginHeader />
        <section className={styles['login-body']}>
          <div>
            <div className={styles['login-form-wrapper']}>
              <div className={styles['login-form-main']}>
                <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                  <div className={styles['login-input']}>
                    <div className={styles['input-control']}>
                      <label className={styles['input-id']}>
                        <input
                          type={'email'}
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                          htmlFor="email"
                          className={styles['place-label']}
                        >
                          Email Address
                        </label>
                        <span className={styles.line}></span>
                      </label>
                    </div>
                  </div>
                  <div className={styles['login-input']}>
                    <div className={styles['input-control']}>
                      <label className={styles['input-id']}>
                        <input
                          name="password"
                          type={'password'}
                          required
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            if (errorMessage.length) {
                              e.target.value.length >= 6 && setErrorMessage('');
                            }
                          }}
                        />
                        <label
                          htmlFor="password"
                          className={styles['place-label']}
                        >
                          Password
                        </label>
                        <span className={styles.line}></span>
                      </label>
                    </div>
                    <div className={styles.error}>{errorMessage}</div>
                  </div>
                  <button className={styles['login-button']}>
                    {isLogin ? 'Sign In' : 'Sign up'}
                  </button>
                </form>
              </div>
              <div>
                <div className={styles['login-form-switcher']}>
                  {isLogin ? 'New to Netflix?' : 'Already have an account?'}
                  <button onClick={() => setIsLogin(!isLogin)}>
                    <a>{isLogin ? 'Sign up now' : 'Sign in now'}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
