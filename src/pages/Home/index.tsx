import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header, Footer, Input, Button } from 'components';
import { ImageBackground } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation(['home', 'common']);
  const [roomName, setRoomName] = useState<string>('');

  const handleClick = () => {
    history.push(`/room/${roomName}`);
  };

  return (
    <>
      <Header />
      <ImageBackground>
        <h1>{t('title')}</h1>
        <Input
          id="input_room"
          type="text"
          onChange={(element: React.ChangeEvent<HTMLInputElement>) =>
            setRoomName(element.target.value)
          }
          placeholder={t('create_room')}
        />
        <Button onClick={handleClick} data-testid="test-login">
          {t('create')}
        </Button>
      </ImageBackground>
      <Footer />
    </>
  );
};

export default Home;
