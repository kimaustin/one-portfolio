import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    z-index: 999;
    position: fixed;
    display: ${({currpage}) => currpage === 'main' && 'none'};
    left: 0;
    height: 100vh;
    width: 3.5rem;

    cursor: crosshair;

    text-orientation: mixed;
    writing-mode: vertical-rl;

    @media screen and (max-width: 811px) {
        /* position: unset; */
        /* left: 0; */
        /* top: 0; */
        width: calc(100vw);
        height: calc(31px + 10px);
        /* border-top: 1.5px solid #201D17;
        border-left: 1.5px solid #201D17;
        border-right: 1px solid #201D17; */
        /* background: none; */
        
        text-orientation: unset;
        writing-mode: unset;
        font-size: 15px;
        /* letter-spacing: -.04rem; */
        background: #201D17;
        /* border: 1px solid black; */
        filter: drop-shadow(0px -50px 130px #201D17);
    }
`;

export const Controller = styled.div`
    z-index: 999;
    position: fixed;
    left: 50vw;
    left: 30%;
    top: 45vh;

    border-radius: 3rem;
    width: 2rem;
    height: 2rem;
    background: red;

    &:hover {
        opacity: 0.5;
        transform: translate(-50%, -50%), scale(1.5);
    }
`

export const NonMobile1 = styled.ul`
    display: flex;
    align-items: center;
    position: fixed;
    left: calc(8.3vw - 3.75rem - 20px);
    left: calc(7vw - 3.5rem);
    left: calc(3.5vw);
    top: 3vh;
    width: 3.5rem;

    @media screen and (max-width: 768px) {
       display: inline-grid;
       align-items: unset;
       position: unset;
       /* position: fixed;
       left: 0; */
       /* left: -1px; */
       /* top: 10px; */
       width: calc(100vw + 2px);
       height: 41px;

       grid-template-columns: 70px 2fr 1fr;
       /* column-gap: 4%; */
    }
`;

export const NaviLink = styled(LinkRouter)`
    position: relative;
    width: 3rem;
    height: 8.75rem;
    
    margin-bottom: .75rem;
    padding-top: 1.15rem;
    padding-right: .75rem;

    cursor: crosshair;

    color: #201D17;
    background: #FFFDFA;
    color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };
    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    };
    border: 1px solid #201D17;

    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'JejuMyeongjo';

    transition: 0.15s all ease-in-out;

    &:hover {
        /* cursor: url("/imgs/c_main.svg"), auto; */
        cursor: pointer;
        background: #201D17;
        color: #FDFEF5;
    }

    @media screen and (max-width: 768px) {
        position: unset;
        width: 100%;
        height: 41px;
        margin-bottom: unset;
        padding-top: 11px;
        padding-right: unset;
        /* text-align: center; */
        padding-left: 15px;
        font-size: 15px;
        border-right: unset;
    }
`

export const InfoLink = styled(LinkRouter)`
    position: fixed;
    width: 3rem;
    height: 8.75rem;

    bottom: 2.9vh;
    left: calc(3.5vw + .27rem);
    
    margin-bottom: .75rem;
    padding-top: 1.15rem;
    padding-right: .75rem;

    cursor: crosshair;

    color: #201D17;
    background: #FFFDFA;
    color: ${({currpage, thispage}) => 
        currpage === thispage && '#FDFEF5'
    };
    background: ${({currpage, thispage}) => 
        currpage === thispage && '#201D17;'
    };
    border: 1px solid #201D17;

    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'JejuMyeongjo';

    transition: 0.15s all ease-in-out;

    &:hover {
        /* cursor: url("/imgs/c_main.svg"), auto; */
        cursor: pointer;
        background: #201D17;
        color: #FDFEF5;
    }

    @media screen and (max-width: 768px) {
        position: unset;
        /* right: 0; */
        width: 100%;
        height: 41px;
        margin-bottom: unset;
        bottom: unset;
        left: unset;
        padding-top: 11px;
        padding-right: 15px;
        padding-bottom: unset;
        text-align: right;
        font-size: 15px;
        z-index: 999;
    }
`

export const Mobile = styled.div`
    display: none;
    position: fixed;

    @media screen and (max-height: 530px) {
        z-index: 998;
        display: block;
        position: fixed;
        bottom: 0rem;
        left: 0;
        background: transparent;
        font-size: 5vh;
        /* cursor: pointer; */
        background: ${({toggle}) => (toggle ? 'white' : 'black')};
        background: white;
        color: ${({toggle}) => (toggle ? 'black' : 'black')};
        padding-left: 2.5vw;
        padding-top: 4px;
        border: 1.5px solid black;
        height: 6vh;
        /* border-radius:50%; */
        width: 11vw;
/* 
        &:hover {
            color: white;
            background-color: black;
            transition: all 0.3s ease-in-out;
        } */
    }
`;

export const Rotating = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.3s all ease-in-out;
    transform: ${({toggle}) => (toggle ? 'rotate(0.5turn)' : 'rotate(0turn)')};
`