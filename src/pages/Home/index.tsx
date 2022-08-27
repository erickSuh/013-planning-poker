import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button';

import { useUser } from 'context/AuthContext';

import { auth } from 'services/firebase';
import { ImageBackground } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { data: userData } = useUser();
  const { t } = useTranslation(['home', 'common']);

  const [message, setMessage] = useState(userData ? t('subtitle_logout') : t('subtitle'));
  // eslint-disable-next-line no-undef
  const [screenTimeout, setScreenTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (screenTimeout) {
        clearTimeout(screenTimeout);
      }
    };
  }, []);

  const handleClick = () => {
    if (userData) {
      auth
        .signOut()
        .then(() => {
          setMessage(t('logout_success'));
          setScreenTimeout(
            setTimeout(() => {
              setMessage(t('subtitle'));
            }, 2000),
          );

          toast.info(t('common:logout_success_message'));
        })
        .catch(() => {
          setMessage(t('subtitle_logout_error'));
          setScreenTimeout(
            setTimeout(() => {
              setMessage(t('subtitle'));
            }, 2000),
          );
        });
    } else {
      history.push('/login');
    }
  };

  return (
    <>
      <Header />
      <ImageBackground>
        <h1>{t('title')}</h1>
        <p>{message}</p>
        <Button onClick={handleClick} data-testid="test-login">
          {userData ? t('logout') : t('login')}
        </Button>
      </ImageBackground>
      <Footer />
    </>
  );
};

export default Home;
