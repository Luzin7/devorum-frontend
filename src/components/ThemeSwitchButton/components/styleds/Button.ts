import styled from 'styled-components';

const Button = styled.button`
  color: white;
  font-size: 7vh;
  border-radius: 100%;

  & {
    @media (min-width: 1024px) {
      font-size: 2.5vh;
    }
  }
`;

export default Button;
