import styled from 'styled-components';

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
    margin-top: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const FooterColumn = styled.div`
    width: 30%;
    margin: 10px;
    display: grid;
    justify-items: center;
    text-align: center;
`;

export const TextSizeLarge = styled.h2`
    color: white;
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
`;

export const TextSizeSmall = styled.p`
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    width: 60%;
`;

export const FooterLinkContainer = styled.div`
    width: 100%;
    display: grid;
    justify-items: center;
    text-align: center;
`;

export const FooterLinkLine = styled.div`
    color: white;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 5px;
    height: 30px;
`;

export const FooterLink = styled.a`
    color: white;
    font-family: 'Courier New', Courier, monospace;
    text-decoration: none;
    margin-left: 18px;
    :hover{
        color: blueviolet;
    }
`;
