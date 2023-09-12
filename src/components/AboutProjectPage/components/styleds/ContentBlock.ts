import styled from 'styled-components';

export const ContentBlock = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  max-width: 20rem;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.input};
    color: white;
  }
`;
