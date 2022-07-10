import React from "react";
import Navbar from "../../components/Navbar";
import { HeroContainer, HeroSlogan, HeroTextContainer, HeroVideoBackground } from "../../styles/Hero.style";
import Video from '../video/hero.mp4';
const Home = () => {
    return(
      <>
      <Navbar/>
      <HeroContainer>
        <HeroVideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
        <HeroTextContainer>
          <HeroSlogan>Digital creativity and self taught productivity</HeroSlogan>
        </HeroTextContainer>
      </HeroContainer>
      </>
    )
  };
  
  export default Home;