import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid #000204;
  border-radius: 0.8rem;
  position: relative;
  padding: 2.4rem 2.4rem 4.6rem 2.4rem;
  width: 304px;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > button {
    background: none;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
  }
  svg {
    color: white;
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
    border-radius: 50%;
  }

  .disheName {
    align-items: center;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.4rem;
    width: 300px;
  }

  .description {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    max-width: 250px;
  }

  .price {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 5.1rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .btnQuantity {
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    input {
      width: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      text-align: center;
      font-size: 2.4rem;
    }

    button {
      width: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 3.4rem;
    }

    input,
    button {
      border: none;
      background-color: ${({ theme }) => theme.COLORS.DARK_200};
    }
  }

  .btnWrapper {
    display: flex;
    gap: 1.6rem;
    > button {
      width: 9.2rem;
    }
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  @media (max-width: 820px) {
    padding: 2.4rem 2.4rem;
    width: 280px;

    .description {
      display: none;
    }

    img {
      width: 14.14rem;
      height: 14.14rem;
    }

    .btnWrapper {
      flex-direction: column;
      > button {
        width: 16.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    .disheName {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      max-width: 200px;
    }
    .description {
      display: none;
    }

    .price {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
    }
  }
  animation: myAnim5 1s ease 0s 1 normal forwards;

  @keyframes myAnim5 {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;
