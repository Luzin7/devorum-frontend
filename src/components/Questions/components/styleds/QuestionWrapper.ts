import styled from 'styled-components';

const QuestionWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  & {
    @media (min-width: 768px) {
      padding: 1.5rem 0.5rem;
      justify-content: space-around;
    }
  }
`;

export default QuestionWrapper;
