import styled from "styled-components";

/**
 * Estilização da tela de início
 */

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(23, 161, 2, 0.3);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Banner = styled.img`
  margin-top: 5vh;

  width: 60vw;
  border-radius: 10px;
`

export const Header = styled.div`
  width: 100vw;
  height: 12vh;
  background: #17a102;

  color: #ccf7c6;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60vw;
  height: 10vh;

  margin-top: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  button {
    width: 20vw;
    height: 20vh;
    border: 2px solid #17a102;
    border-radius: 5px;

    background: #1bbf02;

    color: #ccf7c6;
    font-size: 3vh;
  }

  a {
    & + a {
      margin-left: 200px;
    }
  }
`;