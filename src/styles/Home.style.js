import styled from 'styled-components';
import img from '../assets/computer.jpg';
export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: black;
`;

export const TextDescriptionContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 40vh;
`;

export const CarrousselContainer = styled.div`
    width: 100%;
    height: 40vh;
    background-color: blue;
`;

export const TextSizeLarge = styled.h2`
    color: white;
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 10%;
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
`;

export const HeroVideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const HeroTextContainer = styled.div`
    width: 80%;
    height: 60vh;
    margin: 10%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroSlogan = styled.h1`
    color: salmon;
    font-size: 4em;
    font-family: 'Courier New', Courier, monospace;
`;


