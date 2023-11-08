import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 137px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (max-width: 820px) {
    grid-template-rows: 114px auto 77px;
  }
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;

  @media (min-width: 820px) {
    align-items: center;
  }
`;

export const Form = styled.form`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  a {
    margin-top: 1.1rem;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;

    svg {
      width: 25px;
      height: 25px;
    }
  }
  > h1 {
    margin: 2.4rem 0;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    display: flex;
  }

  > input,
  label > input,
  select,
  textarea {
    border: none;
    border-radius: 0.8rem;
    padding: 1rem 1.4rem;
    margin: 1.6rem 0 2.4rem 0;
  }

  > input,
  label > input,
  textarea,
  .ingredientPlace {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  label,
  .imgLabel {
    display: flex;
    flex-direction: column;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    cursor: pointer;
  }

  > .imageLabel {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .ingredientPlace {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: none;
    border-radius: 0.8rem;

    margin: 1.6rem 0 2.4rem 0;
  }

  .btnWrapper {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    justify-content: center;

    > button {
      margin-bottom: 5rem;
      :first-child {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    > button:first-child:hover {
      animation: myAnim3 2s ease 0s 1 normal forwards;
    }
  }

  @media (min-width: 820px) {
    a {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      svg {
        width: 35px;
        height: 35px;
      }
    }
    > div:nth-child(3) {
      display: flex;
      align-items: center;
      gap: 4.6rem;

      #name {
        width: 46rem;
      }

      #category {
        width: 36rem;
      }
    }

    > div:nth-child(4) {
      display: flex;
      align-items: center;
      gap: 4.6rem;

      .ingredientPlace {
        width: 83rem;
      }
    }

    .btnWrapper {
      justify-content: end;

      > button {
        width: 17rem;
        margin-bottom: 5rem;
      }
    }
  }
`;

export const Image = styled.div`
  > .imageLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    border-radius: 0.8rem;
    padding: 1.3rem 1.4rem;
    margin: 1.6rem 0 2.4rem 0;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  > .imageLabel.file-selected {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  input {
    display: none;
  }

  @keyframes myAnim3 {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 0 50%;
    }

    10% {
      transform: rotate(2deg);
    }

    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }

    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }

    80% {
      transform: rotate(-2deg);
    }

    90% {
      transform: rotate(2deg);
    }
  }
`;
