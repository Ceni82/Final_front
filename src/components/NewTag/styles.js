import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem;
  border-radius: 1rem;
  width: fit-content;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_400 : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_600}` : "none"};

  svg {
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_400 : theme.COLORS.LIGHT_100};
    margin-right: 1rem;
  }

  > input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 3.2rem;
    width: 11rem;
    padding: 0.8rem;
  }

  button {
    background: none;
    border: none;
  }
`;
