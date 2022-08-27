import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Input } from 'components/Input';

import i18n from 'i18n';
import theme from 'styles/theme/main';

test('should render a input', () => {
  const handleChange = jest.fn();

  render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Input id="test_button" type="text" label="label teste" value={"23"} onChange={handleChange} />
      </ThemeProvider>
    </I18nextProvider>);

  const linkElementLabel = screen.getByText(/label teste/g);
  expect(linkElementLabel).toBeInTheDocument();

  const linkElementInput = screen.getByLabelText(/label teste/g) as HTMLInputElement;
  expect(linkElementInput).toBeInTheDocument();

  fireEvent.change(linkElementInput, { target: { value: '23' } });
  expect(linkElementInput.value).toBe('23');
});
