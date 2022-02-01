import styled from 'styled-components';
import { shade } from 'polished';

/**
 * Estilização da tela de chamada
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
  
  #menu {
    width: 100%;
    
    background-color: #17a102;
    box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.2);
    padding: 2vh;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 6vh;
      color: #ccf7c6;
      margin-left: 34vw;
    }

    button {

      &:first-child {
        margin-left: 2vw;
      }

      &:last-child {
        margin-right: 2vw;
      }

      padding: 2vh 2vh 2vh 2vh;
      background-color: #10c926;
      color: #fff;
      border: 0;
      border-radius: 0.4vh;
      font-size: 3vh;
      box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: ${shade(0.03, '#10c926')};
      }
    }
  }
`;

export const Lista = styled.div`
  width: 50vw;
  margin-top: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #sendBtn {
    width: 12vw;
    height: 8vh;

    margin-top: 4vh;
    margin-left: 40vw;

    padding: 2vh 2vh 2vh 2vh;
    background-color: #17a102;
    color: #fff;
    border: 0;
    border-radius: 0.4vh;
    font-size: 3vh;
    box-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
  }

  #table {
    width: 100%;
    background-color: #17a102;
    border-radius: 0.4vh;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;

    padding: 1vh 2vh 1vh 2vh;

    h1, h2 {
      text-align: start;
      padding-left: 2vw;
      width: 75%;
      font-size: 4vh;
      color: #ccf7c6;
      text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.2);
    }

    h2 {
      width: 14%;
    }
  }

  #lista {
    width: 100%;
    background-color: #efffed;
    border-radius: 0.4vh;

    &:nth-child(2n + 1) {
      background-color: #efffed;
    }

    border: 0.1vh solid rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;

    padding: 1vh 2vh 1vh 2vh;

    &:hover {
      background-color: ${shade(0.03, '#efffed')};
    }

    p {
      text-align: start;
      padding-left: 2vw;
      width: 37%;
      font-size: 4vh;
      color: #254221;
    }

    input {
      width: 2vw;
      height: 2vw;

      margin-left: 24vw;
    }

    button {
      width: 12.6%;
      background-color: transparent;
      padding: 1vh;
      border-radius: 0.4vh;
      border: 0;
      
      svg {
        color: #254221;
      }
    }
  }
`;
