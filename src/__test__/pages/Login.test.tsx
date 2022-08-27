import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../utils/test-utils';

import App from 'App';

test('should test a home', async () => {
  renderWithRouter(<App />, { route: '/login' });

  await waitFor(() => expect(screen.getByText('SIGN IN')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('E-mail')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Password')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Submit')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Invalid e-mail')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeInTheDocument());

  await waitFor(() => expect(screen.getByText(/Not registered\?/g)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Sign up')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Forgot your password?/g)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Recover password')).toBeInTheDocument());

  const inputEmail = screen.getByLabelText(/E-mail/g) as HTMLInputElement;
  await waitFor(() => expect(screen.getByText('Invalid e-mail')).not.toBeVisible());

  fireEvent.change(inputEmail, { target: { value: 'teste' } });
  expect(inputEmail.value).toBe('teste');
  await waitFor(() => expect(screen.getByText('Invalid e-mail')).toBeVisible());

  fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } });
  await waitFor(() => expect(screen.getByText('Invalid e-mail')).not.toBeVisible());

  const inputPassword = screen.getByLabelText(/Password/g) as HTMLInputElement;
  await waitFor(() => expect(screen.getByText('Invalid password')).not.toBeVisible());

  fireEvent.change(inputPassword, { target: { value: 'teste' } });
  expect(inputPassword.value).toBe('teste');
  await waitFor(() => expect(screen.getByText('Invalid password')).not.toBeVisible());

  fireEvent.change(inputPassword, { target: { value: '' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());

  fireEvent.change(inputEmail, { target: { value: 'erick.kenji.sugahara@gmail.com' } });
  fireEvent.change(inputPassword, { target: { value: 'UZmala12!' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());
});
