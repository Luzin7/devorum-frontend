import { styled } from 'styled-components';

export const InputField = styled.input`
  width: 100%;
  border-radius: 40px;
  padding: 0.7rem 1.5rem;
  background-color: ${(props) => props.theme.colors.input};
  border: solid 2px transparent;
  outline: none;
  color: ${(props) => props.theme.colors.inputText};

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }

  &:focus {
    border: solid 2px ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.4;
  }
`;
