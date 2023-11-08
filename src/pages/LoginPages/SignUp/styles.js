import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.7rem;
  height: 100vh;
  width: 100%;
  > header {
    align-self: center;
    img {
      width: 100%;
      margin-bottom: 7.4rem;
    }
  }

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > main {
    > div {
      div {
        margin-bottom: 3.2rem;
      }
    }
    h2 {
      margin-bottom: 3.2rem;
      display: none;
    }

    label {
      font-family: "Roboto";
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-bottom: 1rem;
    }

    input {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      margin-top: 4.2rem;
    }

    button {
      margin-top: 3.2rem;
    }
  }
  @media (min-width: 820px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;

    > main {
      h2 {
        display: block;
        text-align: center;
      }
      > div {
        div:focus-within {
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }
    width: 47.6rem;
  }
  animation: myAnim 1.5s ease 0s 1 normal forwards;
  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
