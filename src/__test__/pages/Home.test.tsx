import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "../utils/test-utils";

import App from 'App';

test('should render a home', async () => {
  renderWithRouter(<App />);

  await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
  // anchor login and button login
  await waitFor(() => expect(screen.getAllByText('Login').length).toBe(2));
  await waitFor(() => expect(screen.getByText('Register')).toBeInTheDocument());
  await waitFor(() =>
    expect(screen.getByText('Click on the button to do login!')).toBeInTheDocument(),
  );
  await waitFor(() =>
    expect(screen.getByText('WELCOME TO LOGIN APPLICATION')).toBeInTheDocument(),
  );

  fireEvent.click(screen.getByTestId('test-login'));
  await waitFor(() => expect(screen.getByText('SIGN IN')).toBeInTheDocument());
});
