import styled from 'styled-components';

interface IInput {
  isInvalid?: boolean;
}

export const InputIcon = styled.button`
  padding: 0;
  background-color: transparent;
  top: 34px;
  right: 0;

  .eks-input-icon {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    background-color: transparent;
    top: 34px;
    right: 0;
  }
`;

export const InputContainer = styled.label<IInput>`
  position: relative;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${({ isInvalid }) => (isInvalid ? 'red' : 'inherit')};

  input {
    border-color: ${({ isInvalid }) => (isInvalid ? 'red' : 'inherit')};
    margin-top: 0.5rem;
  }

  input[type='password'] {
    padding-right: 2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
    visibility: ${({ isInvalid }) => (isInvalid ? 'visible' : 'hidden')};

    span {
      color: ${({ theme }) => theme.colors.invalid};
      visibility: ${({ isInvalid }) => (isInvalid ? 'visible' : 'hidden')};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      background-color: transparent;

      path {
        color: ${({ theme }) => theme.colors.invalid};
      }
    }
  }
`;
