import styled from 'styled-components';

const QuestionsWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  overflow-y: scroll;
  width: 100%;
  max-height: 86vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 1.5rem;
  cursor: default;

  &::-webkit-scrollbar {
    width: 0px;
  }

  & {
    @media (min-width: 768px) {
      margin: auto;
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 60%;
    }

    @media (min-width: 1280px) {
      width: 50%;
    }

    @media (min-width: 1536px) {
      width: 40%;
    }
  }
`;

export default QuestionsWrapper;
