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
    width: 25vw;
    height: 64vh;
    background: #efffed;
    border-radius: 0.8vh;

    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 
`;

export const Scroll = styled.div`
    width: 25vw;
    height: 64vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    overflow-x: hidden;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 2vh;

        label {
            font-size: 3vh;
            color: #17a102;

            margin-bottom: 5px;
        }

        button {
            padding: 1vh;
            background-color: #17a102;
            border: 0;
            border-radius: 0.4vh;
            color: #fff;
            margin-top: 3.5vh;
            font-size: 3vh;

            &:hover {
                background-color: ${shade(0.03, '#17a102')};
            }
        }

        input {
            width: 12vw;
            height: 4vh;
            background-color: #ededed;
            border: 0.1vh solid #17a102;
            border-radius: 0.4vh;
            padding: 0.2vh;
            padding-left: 0.8vh;
            font-size: 2.1vh;
            color: #254221;
        }
    }
`;

export const Title = styled.div`
    width: 25vw;
    padding: 1vh;
    background: #17a102;

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
        margin-left: 22vw;
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