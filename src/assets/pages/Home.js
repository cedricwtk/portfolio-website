import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HeroContainer, HeroSlogan, HeroTextContainer, HeroVideoBackground, BodyContainer, TextDescriptionContainer, TextSizeLarge, CarrousselContainer } from "../../styles/Home.style";
import Video from '../video/hero.mp4';
const Home = () => {
    return(
      <>
      <Navbar/>
      <BodyContainer>
      <HeroContainer>
        <HeroVideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
        <HeroTextContainer>
          <HeroSlogan>Digital creativity and self taught productivity</HeroSlogan>
        </HeroTextContainer>
      </HeroContainer>
      <CarrousselContainer>
        <TextSizeLarge>This section will hold a caroussel</TextSizeLarge>
      </CarrousselContainer>
      <TextDescriptionContainer>
        <TextSizeLarge>This section will hold a short description about me</TextSizeLarge>
      </TextDescriptionContainer>

      </BodyContainer>
      <Footer/>
      </>
    )
  };
  
  export default Home;