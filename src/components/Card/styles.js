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

  padding: 5.55rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid #000204;
  border-radius: 0.8rem;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  animation: myAnim 1s ease 0s 1 normal forwards;

  button {
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

  @media (max-width: 820px) {
    padding: 8rem 2.4rem;
    width: 280px;

    .disheName {
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
    }
    .description {
      display: none;
    }
    .price {
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.6rem;
    }

    img {
      width: 14.14rem;
      height: 14.14rem;
    }
  }

  @media (max-width: 480px) {
    padding: 8rem 2.4rem;
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
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
    }
  }

  animation: myAnim2 1s ease 0s 1 normal forwards;

  @keyframes myAnim2 {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;
