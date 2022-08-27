import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'components/Button';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme/main';

test('should render a button', () => {
  const handleClick = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Button id="test_button" onClick={handleClick}>
        teste1
      </Button>
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/teste1/g);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
