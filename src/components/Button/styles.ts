import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  height: 40px;
  margin: 1rem 0;
  background-color: ${({ backgroundColor, disabled, theme }) =>
    disabled ? theme.colors.disabled : backgroundColor};
  color: ${({ color }) => color};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color 0.3s linear;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 1 : 0.85)};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 1rem rgba(0, 123, 200, 0.8);
  }

  &:active {
    transform: scale(0.98);
  }
`;
