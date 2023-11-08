import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 1.2rem 0;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.4rem;

  border: none;
  border-radius: 0.5rem;
  width: 100%;
`;
