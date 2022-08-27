import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import eIcon from 'assets/e.png';

import { HeaderContainer, ImageContainer } from './styles';

export const Header: React.FC = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <ImageContainer onClick={() => history.push('/')} src={eIcon} alt="LOGO_DA_EMPRESA" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </HeaderContainer>
  );
};
