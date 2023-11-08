import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;

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
  padding: 0 5.6rem;
  > header {
    a {
      margin: 4.2rem 0 3.2rem 0;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .DisheInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 1.6rem;
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
    }

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;

      margin-bottom: 2.4rem;
    }

    > div {
      > p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rempx;
        line-height: 140%;
        margin-bottom: 2.4rem;
      }
    }
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
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
  }

  .btnWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4.8rem 0;
    gap: 1.6rem;
    > button {
      width: max-content;
      padding: 0.8rem 4.3rem;
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .tagPlace {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;

    > header {
      width: 1120px;

      a {
        font-weight: 700;
        font-size: 2.4;
        line-height: 140%;
      }

      svg {
        width: 35px;
        height: 35px;
      }
    }

    .DisheInfo {
      max-width: 112rem;
      flex-direction: row;
      gap: 4.7rem;

      img {
        width: 35rem;
        height: 35rem;
      }
      > div {
        display: flex;
        flex-direction: column;
        align-items: start;
      }

      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 820px) and (max-width: 1210px) {
    > header {
      width: 700px;
    }
  }
`;
