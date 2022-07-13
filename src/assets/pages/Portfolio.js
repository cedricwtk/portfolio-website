import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BodyContainer } from "../../styles/Home.style";
import { PortfolioContainer } from "../../styles/Portfolio.style";
import Video from '../video/hero.mp4';
const Portfolio = () => {
    return(
      <>
      <Navbar/>
      <PortfolioContainer>
      </PortfolioContainer>
    <Footer/>
      </>
    )
  };
  
  export default Portfolio;