import styled from 'styled-components';

const QuestionWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  & {
    @media (min-width: 768px) {
      padding: 1rem 2rem;
    }
  }
`;

export default QuestionWrapper;
