import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HeroContainer, HeroSlogan, TextDescriptionButton, HeroTextContainer, HeroVideoBackground, BodyContainer, TextDescriptionContainer, TexteDescriptionGauche, TextSizeLarge, CarrousselContainer, TextDescriptionDroite } from "../../styles/Home.style";
import Video from '../video/hero.mp4';
const Home = () => {
  return (
    <>
      <Navbar />
      <BodyContainer>
        <HeroContainer>
          <HeroVideoBackground autoPlay loop muted src={Video} type='video/mp4' />
          <HeroTextContainer>
            <HeroSlogan>Digital creativity and self taught productivity</HeroSlogan>
          </HeroTextContainer>
        </HeroContainer>
        <CarrousselContainer>
        </CarrousselContainer>
        <TextDescriptionContainer>
          <TexteDescriptionGauche>
            <TextSizeLarge>I am Cedric Wu Tchan Ki, developer and open for new challenges.</TextSizeLarge>
            <TextDescriptionButton href="mailto:cedric@wutchanki.com">CONTACT ME</TextDescriptionButton>
          </TexteDescriptionGauche>
          <TextDescriptionDroite>
          </TextDescriptionDroite>
        </TextDescriptionContainer>
      </BodyContainer>
      <Footer />
    </>
  )
};

export default Home;