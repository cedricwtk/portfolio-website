import styled from 'styled-components';
import video from '../assets/video/hero.mp4';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${video});
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
    font-size: 3em;
    font-family: 'Courier New', Courier, monospace;

`;


