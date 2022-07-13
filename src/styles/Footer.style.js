import styled from 'styled-components';
import {Link} from 'react-router-dom';

//Contenant general du footer
export const FooterContainer = styled.div`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "300px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    bottom: 0;
`;

export const FooterSubContainer = styled.div`
    margin: 2%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const FooterColumn = styled.div`
    width: 30%;
    margin: 10px;
    background-color: purple;
`;

export const TextSizeLarge = styled.h2`
    color: white;
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
`;

