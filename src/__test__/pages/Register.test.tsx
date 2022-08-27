import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../utils/test-utils';

import App from 'App';

test('should test a home', async () => {
  renderWithRouter(<App />, { route: '/register' });

  await waitFor(() => expect(screen.getByText('SIGN UP')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('E-mail')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Password')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Confirm password')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Submit')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Invalid e-mail')).toBeInTheDocument());
  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).toBeInTheDocument(),
  );
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeInTheDocument());

  await waitFor(() => expect(screen.getByText(/Not registered\?/g)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Sign in')).toBeInTheDocument());

  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).not.toBeVisible(),
  );

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
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());
  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).toBeVisible(),
  );

  fireEvent.change(inputPassword, { target: { value: '' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());

  fireEvent.change(inputPassword, { target: { value: 'teste!' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());

  fireEvent.change(inputPassword, { target: { value: 'teste1' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());

  fireEvent.change(inputPassword, { target: { value: 'Teste1!' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).toBeVisible());

  fireEvent.change(inputPassword, { target: { value: 'Teste1!1234' } });
  await waitFor(() => expect(screen.getByText('Invalid password')).not.toBeVisible());

  const inputConfirmPassword = await waitFor(()=> screen.getByLabelText(/Confirm password/g)) as HTMLInputElement;
  fireEvent.change(inputConfirmPassword, { target: { value: 'teste' } });
  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).toBeVisible(),
  );

  fireEvent.change(inputConfirmPassword, { target: { value: '' } });
  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).toBeVisible(),
  );

  fireEvent.change(inputConfirmPassword, { target: { value: 'Teste1!1234' } });
  await waitFor(() =>
    expect(screen.getByText('Confirm password is different of password')).not.toBeVisible(),
  );
});
