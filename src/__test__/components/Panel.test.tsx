import React from 'react';
import { render, screen } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Panel } from "components/Panel";

import i18n from 'i18n';
import theme from 'styles/theme/main';

test('should render a panel', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Panel>
          Test
        </Panel>
      </ThemeProvider>
    </I18nextProvider>);

  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toBeInTheDocument();
});
