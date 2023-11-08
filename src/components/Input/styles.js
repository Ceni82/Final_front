import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 1.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding-left: 2rem;
  border-radius: 0.5rem;

  > input {
    height: 4.8rem;
    border: none;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
