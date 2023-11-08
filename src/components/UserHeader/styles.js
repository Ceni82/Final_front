import styled from "styled-components";

export const MobileContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1.6rem;
  padding: 0 0 2.4rem 2.8rem;
  height: 114px;
  z-index: 10;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  position: fixed;
  width: 100%;

  h1 {
    font-family: "Roboto";
    font-weight: 400;
    line-height: 2.5rem;
    font-size: 2.1rem;
  }
  > .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 1.6rem;
    button {
      display: flex;

      background-color: transparent;
      border: none;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > .nav-elements {
    visibility: hidden;
    padding: 3.6rem 2.8rem 0;
    position: absolute;
    z-index: 99;
    width: 0;

    top: 11.4rem;
    left: -28rem;

    text-decoration: none;
    transition: left 0.5s, width 0.7s;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    //input de pesquisa
    div:nth-child(1) {
      margin-bottom: 3.6rem;
    }

    ul {
      display: none;
    }

    li {
      font-size: 2.4rem;
      line-height: 3.4rem;
      list-style-type: none;
    }
  }
  > .nav-elements.active {
    visibility: visible;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    z-index: 100;
    width: 100%;
    height: 100vh;
    margin-top: 11.4rem;
    top: 0;
    left: 0;

    text-decoration: none;

    ul {
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }

    li {
      font-size: 2.4rem;
      line-height: 3.4rem;
      list-style-type: none;

      border-bottom: solid ${({ theme }) => theme.COLORS.DARK_1000} 2px;
      padding-bottom: 1rem;
      width: 100%;

      a,
      button {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;
        border: none;
      }
    }
  }

  > div > div {
    position: relative;
    span {
      position: absolute;
      top: -5px;
      right: -3px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      font-size: 1.4rem;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }
`;

export const DesktopContainer = styled.div`
  grid-area: header;
  padding-inline: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .wrapper {
    display: flex;
    gap: 2.4rem;
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 2.4rem;
      height: 2.4rem;
    }
    button:nth-child(2) {
      border: none;
      background-color: transparent;
    }
  }

  > div > input {
    width: 58rem;
  }

  .buttonWrapper {
    width: 21.6rem;
  }
`;
