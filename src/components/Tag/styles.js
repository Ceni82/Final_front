import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  border-radius: 0.8rem;

  > p {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 1.4;
    line-height: 24px;

    padding: 0.4rem 0.8rem;
  }
`;
