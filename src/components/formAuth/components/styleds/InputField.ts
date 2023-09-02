import { styled } from 'styled-components';

export const InputField = styled.input`
  width: 100%;
  border-radius: 40px;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.colors.input};
  border: solid 2px transparent;
  outline: none;
  color: black;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:focus {
    border: solid 2px ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.4;
  }
`;
