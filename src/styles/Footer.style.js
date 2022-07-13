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
    width: 80%;
    background-color: red;
`;

