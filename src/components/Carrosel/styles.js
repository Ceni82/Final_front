import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.5rem;

    margin-bottom: 2.3rem;
  }

  .carousel {
    display: flex;
    gap: 2.7rem;
    max-width: 1120px;
    margin-bottom: 4.8rem;
    overflow-x: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  .rightBtn {
    position: absolute;
    z-index: 2;

    right: 0rem;
    top: 25rem;

    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    border: none;
    color: white;
  }

  .leftBtn {
    position: absolute;
    z-index: 2;

    left: 0rem;
    top: 25rem;

    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border: none;
    color: white;
  }

  @media (max-width: 820px) {
    .carousel {
      max-width: 700px;
    }

    .leftBtn,
    .rightBtn {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .carousel {
      gap: 1.7rem;
      max-width: 380px;
    }

    .leftBtn,
    .rightBtn {
      display: none;
    }
  }
`;
