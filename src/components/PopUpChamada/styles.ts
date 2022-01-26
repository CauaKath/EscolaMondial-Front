import styled from "styled-components";
import { shade } from 'polished';

import Close from '../../assets/close.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
`;

export const PopUp = styled.div`
    width: 40vw;
    height: 50vh;
    background: #fff;
    border-radius: 0.8vh;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 
`;

export const Scroll = styled.div`
    width: 40vw;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    overflow-x: hidden;
    overflow: auto;

    #table {
        width: 100%;
        border-radius: 0.4vh;
        background-color: #ebf3ff;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;

        padding: 1vh 2vh 1vh 2vh;

        h1 {
            text-align: center;
            font-size: 4vh;
            color: #247aff;
            text-shadow: 0.1vh 0.1vh 1vh rgba(0, 0, 0, 0.1);
        }
    }

    #lista {
        background-color: #deebff;

        &:nth-child(2n + 1) {
            background-color: #ebf3ff;
        }

        &:hover {
            background-color: ${shade(0.03, '#deebff')};
        }
    }

    #enviar {
        justify-content: flex-end;
        margin-right: 9vw;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 2vh;

       h1, p {
            font-size: 3vh;
            color: #333;
            margin-left: 4vw;
            margin-right: 4vw;
        }

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 15vw;
        }

        button {
            padding: 1vh;
            background-color: #247aff;
            border: 0;
            border-radius: 0.4vh;
            color: #fff;
            margin-top: 3.5vh;
            font-size: 3vh;

            &:hover {
                background-color: ${shade(0.03, '#247aff')};
            }
        }

        input {
            width: 14vw;
            height: 4vh;
            background-color: #ededed;
            border: 0.1vh solid #333;
            border-radius: 0.4vh;
            padding: 0.2vh;
            font-size: 2.1vh;
        }
    }
`;

export const Title = styled.div`
    width: 40vw;
    padding: 1vh;
    background: #247aff;

    display: flex;
    flex-direction: row;

    h1 {
        color: #fff;
        font-size: 4vh;
        margin-left: 0.5vw;
    }

    span {
        background-image: url(${Close});
        border: 0;
        background-color: transparent;
        width: 4vh;
        height: 4vh;
        margin-top: 0.5vh;
        margin-left: 36vw;
        position: absolute;
        background-size: cover;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;