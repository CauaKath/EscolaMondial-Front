import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Popup from 'reactjs-popup';

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
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 6vh;
      color: #ccf7c6;
      margin-left: 3vw;
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
  width: 80vw;
  margin-top: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: red;

  #table {
    width: 100%;
    background-color: #17a102;
    border-radius: 0.4vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    padding: 1vh 2vh 1vh 2vh;

    h1, h2 {
      text-align: center;
      width: 37.4%;
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
    justify-content: space-between;
    align-content: center;

    padding: 1vh 2vh 1vh 2vh;

    &:hover {
      background-color: ${shade(0.03, '#efffed')};
    }

    p {
      text-align: center;
      width: 37.4%;
      font-size: 4vh;
      color: #254221;
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

export const PopupModal = styled(Popup)`
	&-content {
		background: transparent;
		animation: anvil 0.25s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;