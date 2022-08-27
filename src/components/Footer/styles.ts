import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 0.25rem;
  }
`;
