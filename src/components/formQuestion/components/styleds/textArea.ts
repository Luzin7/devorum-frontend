import { styled } from 'styled-components';

export const textArea = styled.textarea`
  width: 100%;
  border-radius: 20px;
  padding: 1rem 1.5rem;
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
