import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
//import { HeroContainer, Caroussel, CarousselImg, CarousselItem, CarousselCaption, HeroSlogan, TextDescriptionButton, HeroTextContainer, HeroVideoBackground, BodyContainer, TextDescriptionContainer, TexteDescriptionGauche, TextSizeLarge, CarrousselContainer, TextDescriptionDroite } from "../../styles/Home.style";
import * as X from "../../styles/Home.style";
import Video from '../video/hero.mp4';
import Image1 from '../image/team.jpg';
import Image2 from '../image/vietnam.jpg';
import Image3 from '../image/computer.jpg';
import Image4 from '../image/learning.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <X.BodyContainer>
        <X.HeroContainer>
          <X.HeroVideoBackground autoPlay loop muted src={Video} type='video/mp4' />
          <X.HeroTextContainer>
            <X.HeroSlogan>Digital creativity and self taught productivity</X.HeroSlogan>
          </X.HeroTextContainer>
        </X.HeroContainer>
        <X.CarrousselContainer>
          <X.Caroussel>
            <X.CarousselItem>
              <X.CarousselImg src={Image3} />
              <X.CarousselCaption>
                <h3>Software Developer</h3>
                <p>I have 2 years of experience on the market</p>
              </X.CarousselCaption>
            </X.CarousselItem>
            <X.CarousselItem interval={3000}>
              <X.CarousselImg src={Image1} />
              <X.CarousselCaption>
                <h3>Team Player</h3>
                <p>I have good interpersonal skills, I can work and get along with anyone</p>
              </X.CarousselCaption>
            </X.CarousselItem>
            <X.CarousselItem interval={3000}>
              <X.CarousselImg src={Image2} />
              <X.CarousselCaption>
                <h3>Critical Mind</h3>
                <p>I observe, I think and I make changes if needed</p>
              </X.CarousselCaption>
            </X.CarousselItem>
            <X.CarousselItem>
              <X.CarousselImg src={Image4} />
              <X.CarousselCaption>
                <h3>Continuous Improvement</h3>
                <p>Always studying new topics and honing my skills</p>
              </X.CarousselCaption>
            </X.CarousselItem>
          </X.Caroussel>
        </X.CarrousselContainer>
        <X.TextDescriptionContainer>
          <X.TexteDescriptionGauche>
            <X.TextSizeLarge>I am Cedric Wu Tchan Ki, developer and open for new challenges.</X.TextSizeLarge>
            <X.TextDescriptionButton href="mailto:cedric@wutchanki.com">CONTACT ME</X.TextDescriptionButton>
          </X.TexteDescriptionGauche>
          <X.TextDescriptionDroite>
          </X.TextDescriptionDroite>
        </X.TextDescriptionContainer>
      </X.BodyContainer>
      <Footer />
    </>
  )
};

export default Home;