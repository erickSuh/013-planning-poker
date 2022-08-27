import styled from 'styled-components';

export const Container = styled.div`
  min-width: 400px;
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 60px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CardContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 10px;

  &.wrapper {
    width: 100%;
  }
`;

export const Table = styled.div`
  height: 30%;
  width: 50%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
`;
