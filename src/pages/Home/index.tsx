import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'context/UserContext';
import { createRoom } from 'services/room';

import { Header, Footer, Input, Button } from 'components';
import { ImageBackground } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { handler } = useContext(UserContext);
  const { t } = useTranslation(['home', 'common']);
  const [roomName, setRoomName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const handleClick = () => {
    const sendUser = {
      id: '',
      name: userName,
      vote: '',
    };
    handler(sendUser);

    createRoom({ name: roomName, users: [sendUser] });

    console.log('createBoardKey');

    // history.push(`/room/${id}`);
  };

  return (
    <>
      <Header />
      <ImageBackground>
        <h1>{t('title')}</h1>
        <Input
          id="input_name"
          type="text"
          onChange={(element: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(element.target.value)
          }
          placeholder={t('user_name')}
        />
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
