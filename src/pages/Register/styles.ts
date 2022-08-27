import styled from 'styled-components';
import { Panel } from 'components/Panel';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: ${({ theme }) => theme.colors.header};
  padding: 2rem;

  .header-icon {
    width: 70px;
    height: 70px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    z-index: 10;

    @media (min-width: ${({ theme }) => theme.width.tablet}) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const LoginPanel = styled(Panel)`
  position: relative;
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  border-radius: 2px;

  @media (min-width: ${({ theme }) => theme.width.tablet}) {
    max-width: 500px;
  }

  h2 {
    margin: 1rem 0 1.5rem 0;
    text-align: center;
  }

  form {
    width: 100%;
  }

  button {
    width: 100%;

    .MuiCircularProgress-indeterminate {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;
