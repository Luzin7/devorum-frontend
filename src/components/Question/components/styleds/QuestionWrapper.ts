import styled from 'styled-components';

const QuestionWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  width: 100%;

  & {
    @media (min-width: 768px) {
      padding: 1.5rem;
      justify-content: space-around;
    }

    @media (min-width: 1024px) {
      width: 100%;
      padding: 1.5rem;
      justify-content: space-between;
    }
  }
`;

export default QuestionWrapper;
