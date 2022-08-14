import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Contenant general de la barre de navigation
export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
`;

//Contenant representant la partie gauche de la barre de navigation
export const LeftNavContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

//Contenant representant la partie droite de la barre de navigation
export const RightNavContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 5%;
`;

//Contenant extra pour responsivite
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px){
        display: none;
    }
`;

//Contenant pour le wrapper de la partie gauche et droite
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
`;

//Contenant pour les liens de la barre de navigation
export const NavbarLinkContainer = styled.div`
    display: flex;
    margin: auto;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 30px;

    :hover{
        color: blueviolet;
    }

    @media (max-width: 700px){
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 30px;

    :hover{
        color: blueviolet;
    }
`;

export const Logo = styled.img`
    margin-top: 30px;
    max-width: 200px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 60px;
    height: auto;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media(min-width: 700px){
        display: none;
    }
`;