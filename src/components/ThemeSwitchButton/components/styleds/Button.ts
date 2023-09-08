import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  font-size: 7vh;
  border-radius: 100%;

  & {
    @media (min-width: 1024px) {
      font-size: 4vh;
    }
  }
`;

export default Button;
