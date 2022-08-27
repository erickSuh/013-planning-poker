import styled from 'styled-components';
import background from 'assets/background.svg';

export const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 600px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-position: 50% 50%;
  background-size: cover;
  padding: 2rem;

  h1 {
    font-size: 40px;
    width: 30%;
    min-width: 300px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  button {
    max-width: 264px;
  }

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    min-height: 825px;
    padding: 4rem;

    h1 {
      font-size: 60px;
      width: 30%;
      min-width: 300px;
    }
  }
`;
