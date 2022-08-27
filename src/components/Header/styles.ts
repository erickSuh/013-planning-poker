import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    a {
      width: 100%;
      height: 100%;
      padding: 1rem;
      text-align: center;
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
        transition: 0.3s background-color linear;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
    align-items: center;
    padding: 1.5rem 4rem;
    height: 7rem;

    nav {
      display: flex;
      flex-direction: row;
      width: auto;
      height: auto;

      a {
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
          text-decoration: underline;
          background-color: inherit;
        }
      }
    }
  }
`;

export const ImageContainer = styled.img`
  height: 100%;
  display: none;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    display: block;
  }
`;
