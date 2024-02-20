import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    /* width: 100vw; */
    position: fixed;
    z-index: 999;
    height: 100vh; 
    cursor: crosshair;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    @media screen and (max-width: 768px) {
        display: none;
        opacity: 0;
    }
`

export const BotSection = styled.div`
    /* display: flex; */
    position: fixed;
    bottom: calc(3.8vh + 1px);
    right: calc(3.55vw);

    /* height: 25vh; */
    width: 2.75rem;

    background: #FFFDFA;
    border: 1px solid #201D17;
   
    overflow: hidden;

    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align: right;

    padding-right: .62rem;
    padding-bottom: .9rem;
    padding-top: 3rem;
    /* letter-spacing: .05rem; */

    a {
        font-family: "JejuMyeongjo";
        font-size: 1.2rem;
        color: #201D17;
    }

    transition: 0.15s all ease-in-out;

    &:hover {
        background: blue;
        cursor: pointer;

        a {
        color: white;

        }
    }

`

export const TopSection = styled.div`
    display: flex;
    position: fixed;
    top: 3vh;
    right: calc(7.15vw - 2.55rem);
    right: calc(3.55vw);

    /* height: 45vh; */
    width: 2.75rem;

    background: #FFFDFA;
    border: 1px solid #201D17;
   
    overflow: hidden;
    cursor: url("/imgs/c_main.svg"), auto;
    cursor: crosshair;


    writing-mode: vertical-rl;
    text-orientation: mixed;

    font-family: "JejuMyeongjo";
    font-size: 1.17rem;
    padding-right: .65rem;
    padding-top: 1.1rem;
    padding-bottom: 5rem;
    /* letter-spacing: -.015rem; */
`

export const HoverContainer = styled.div`
    /* position: fixed;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20vw;
    height: 20vw;
    background: green; */

    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 10s linear infinite;
`

const linearText1 = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(-100%);
    };
` 

const marquee1 = keyframes`
    0% {
        top: 100%;
    }
    100% {
        top: -100%
    }
`

const marquee2 = keyframes`
    0% {
        left: 100%;
    }
    100% {
        left: -150%
    }
`

export const Marquee = styled.span`
    position: fixed;
    display: inline;
    padding-right: 1.2rem;
    right: calc(3vw);
    top: 2rem;

    font-family: 'Iskoola';
    font-family: 'JejuMyeongjo';
    font-size: 1.4rem;
    color: #201D17;
    letter-spacing: -.01rem;
    white-space: nowrap;
    
    writing-mode: vertical-rl;
    text-orientation: mixed;

    cursor: url("/imgs/c_main.svg"), auto;

    animation: ${marquee1} 20s linear infinite;
    /* animation-delay: ${({starter}) => (starter ? '0s' : '20s')}; */
    
    @media screen and (max-width: 768px) {
        /* top: 0; */
        top: calc(96vh + .4rem);
        /* margin-top: 0; */
        margin-right: unset;
        bottom: 0;
        height: 100%;
        width: 100vw;
        /* margin-left: 0rem; */
        right: unset;
        left: 100vw;
        /* left: -50vw; */
        postion: fixed;
        display: grid;

        writing-mode: horizontal-tb;
        text-orientation: mixed;
        font-size: .85rem; /* right: 0; */
        
        /* padding-left: ${({starter}) => (starter ? '0' : '10px')}; */
        /* letter-spacing: -.01rem; */
        animation: ${marquee2} 15s linear infinite;
        /* animation: ${({starter}) => (starter ? linearText3 : linearText4)} 20s linear infinite; */
        /* animation-delay: ${({starter}) => (starter ? '0s' : '15s')}; */
    }
`

const linearText2 = keyframes`
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(-200%);
    };
` 

const linearText3 = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    };
` 

const linearText4 = keyframes`
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(0%);
    };
` 