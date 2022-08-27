import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {Header} from 'components/Header';
import theme from 'styles/theme/main';

test('should render a header', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );
  const linkRegister = screen.getByText(/Register/i);
  expect(linkRegister).toBeInTheDocument();
  const linkLogin = screen.getByText(/Login/i);
  expect(linkLogin).toBeInTheDocument();
  const linkHome = screen.getByText(/Home/i);
  expect(linkHome).toBeInTheDocument();
});
