import styled from 'styled-components';
import img from '../assets/description.jpg';
import nobg from '../assets/me-no-bg.png';

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: black;
`;

export const TextDescriptionDroite = styled.div`
    height: 100%;
    width: 30%;
    background-image: url(${nobg});
    background-size: cover;
    margin-right: 200px;
`;
export const TexteDescriptionGauche = styled.div`
`;

export const TextDescriptionButton = styled.a`
  color: white;
  margin-left: 20vw;
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.25em 1em;
  border: 3px solid purple;
  background-color: black;
  border-radius: 3px;
  text-decoration: none;

  :hover{
    color: purple;
    background-color: white;
    border: 4px solid palevioletred;
  }

`;

export const TextDescriptionContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 60vh;
    display: flex;
`;

export const TextDescriptionBackground = styled.div`
`;

export const CarrousselContainer = styled.div`
    width: 100%;
    height: 50vh;
    background-color: blue;
    display: block;
    position: relative;
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


