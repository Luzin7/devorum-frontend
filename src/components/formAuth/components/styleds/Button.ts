import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
  padding: 1rem 0;
  min-width: 100%;
  border-radius: 40px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  transition: all 400ms;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  & {
    @media (min-width: 768px) {
      width: 80%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (min-width: 1280px) {
      width: 90%;
    }

    @media (min-width: 1536px) {
      width: 50%;
    }
  }
`;