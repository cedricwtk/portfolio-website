import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HeroContainer, Caroussel, CarousselImg, CarousselItem, CarousselCaption, HeroSlogan, TextDescriptionButton, HeroTextContainer, HeroVideoBackground, BodyContainer, TextDescriptionContainer, TexteDescriptionGauche, TextSizeLarge, CarrousselContainer, TextDescriptionDroite } from "../../styles/Home.style";
import Video from '../video/hero.mp4';
import Image1 from '../team.jpg';
import Image2 from '../vietnam.jpg';
import Image3 from '../computer.jpg';
import Image4 from '../learning.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Caroussel>
            <CarousselItem>
              <CarousselImg src={Image3} />
              <CarousselCaption>
                <h3>Software Developer</h3>
                <p>I have 2 years of experience on the market</p>
              </CarousselCaption>
            </CarousselItem>
            <CarousselItem interval={3000}>
              <CarousselImg src={Image1} />
              <CarousselCaption>
                <h3>Team Player</h3>
                <p>I have good interpersonal skills, I can work and get along with anyone</p>
              </CarousselCaption>
            </CarousselItem>
            <CarousselItem interval={3000}>
              <CarousselImg src={Image2} />
              <CarousselCaption>
                <h3>Critical Mind</h3>
                <p>I observe, I think and I make changes if needed</p>
              </CarousselCaption>
            </CarousselItem>
            <CarousselItem>
              <CarousselImg src={Image4} />
              <CarousselCaption>
                <h3>Continuous Improvement</h3>
                <p>Always studying new topics and honing my skills</p>
              </CarousselCaption>
            </CarousselItem>
          </Caroussel>
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