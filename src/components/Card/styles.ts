import styled from 'styled-components';

export const Card = styled.div`
  height: 80px;
  line-height: 80px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bolder;
  text-align: center;
  vertical-align: middle;
  border-radius: 12px;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`;
