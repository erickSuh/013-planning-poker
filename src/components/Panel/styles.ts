import styled from 'styled-components';
import { PanelProps } from './types';

export const Panel = styled.div<PanelProps>`
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  background-color: ${({ theme, background }) => background || theme.colors.secondary};
  overflow: auto;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    padding: 4rem;
  } ;
`;
