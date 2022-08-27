import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translate(0, 10px);
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

export default createGlobalStyle`
  .fadeIn {
    animation: ${fadeIn} 1s linear;
  }

  * {
    font-family: ${(props) => props.theme.fonts.family};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    background: transparent;
    font-size: 14px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 32px;
    font-weight: 'semi-bold';
  }

  h2 {
    font-size: 28px;
    font-weight: 'semi-bold';
  }

  h3 {
    font-size: 24px;
    font-weight: 'semi-bold';
  }

  h4 {
    font-size: 20px;
    font-weight: 'semi-bold';
  }

  label {
    font-size: 16px;
    font-weight: 'semi-bold';
  }

  span {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }

  select {
    border-radius: 0.5rem;

    &:focus {
      outline: none;
      box-shadow: 0 0 1rem rgba(0, 123, 200, .5);
    }
  }

  button {
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 16px;
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(0, 0, 0, .25);
    font-size: 16px;

    &:focus {
      outline: none;
      box-shadow: 0 0 1rem rgba(0, 123, 200, .8);
    }

    &:disabled {
      background-color: lightgray;
    }
  }
  
  body {
    display: block;
    color: ${(props) => props.theme.colors.primary};
    background: #f7f3f7;
  }
`;
