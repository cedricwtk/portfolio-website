import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const PortfolioContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: green;
`;

export const PortfolioRow = styled(Row)`

`;
export const PortfolioCol = styled(Col)`

`;
export const PortfolioCard = styled(Card)`
justify-content: center;
height: 350px;
text-align: center;
margin: 5%;
`;

export const PortfolioCardImg = styled(Card.Img)`
height: 200px;
`;

export const TextSizeLarge = styled.h2`
    color: white;
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 10%;
    text-align: center;
`;