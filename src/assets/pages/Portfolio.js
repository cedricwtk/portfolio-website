import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image1 from '../image/cnrc.jpg';
import Image2 from '../image/uqam.jpg';
import Image3 from '../image/computer.jpg';
import Image4 from '../image/learning.jpg';
import { PortfolioContainer, PortfolioCardImg, PortfolioRow, PortfolioCard, PortfolioCol, TextSizeLarge } from "../../styles/Portfolio.style";
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <PortfolioContainer>
        <TextSizeLarge>MY PORTFOLIO</TextSizeLarge>
        <PortfolioRow>
          <PortfolioCol>
            <PortfolioCard>
              <PortfolioCard.Body>
                <svg viewBox="0 0 500 415.8" width="100" x="0px" y="0px">
                  <g>
                    <path d="M30.4,52.6l25,41l25-41h25.3L67.8,114l42,68.6H84.6l-29.1-48.2l-29.1,48.2H1l42-68.6L5.2,52.6H30.4z"></path>
                    <path d="M182.7,0v182.6H161V0H182.7z"></path>
                    <path d="M113.5,329.4c-10.6,24.3-27.6,35.8-54.4,35.8C19.4,365.3,0,333,0,298.2s19.4-67,59.1-67c26.8,0,43.8,11.6,54.4,35.8              l-18.8,7.7c-6.7-15.7-17.8-24-35.6-24c-25.3,0-36.9,21.4-36.9,47.5c0,26.1,11.6,47.5,36.9,47.5c17.8,0,28.9-8.3,35.6-24
                L113.5,329.4z"></path>
                    <path d="M182.2,233.2v130h-21.7v-130H182.2z"></path>
                    <path d="M336.7,363.2H315v-85.9c0-17.8-8-26.6-22.4-26.6c-19.3,0-37.1,21.9-37.1,58v54.4h-21.7v-130h21.7v24
                c9.5-16.8,25-26,43.1-26c23.7,0,38.2,14.7,38.2,40.5V363.2z"></path>
                    <path d="M440.4,231.2c15.7,0,31.7,8.5,37.9,18.1v-16H500v182.6h-21.7v-68.1c-4.4,7.5-21.4,17.5-37.9,17.5
                c-38.2,0-57.8-28.1-57.8-67C382.7,259.3,402.3,231.2,440.4,231.2z M442.5,345.7c23.7,0,37.7-19.6,37.7-47.5s-13.9-47.5-37.7-47.5
                c-23,0-37.7,19.6-37.7,47.5S419.5,345.7,442.5,345.7z"></path>
                  </g>
                </svg>
                <PortfolioCard.Title style={{ marginTop: "50px" }}>XLCINQ</PortfolioCard.Title>
                <PortfolioCard.Text>
                  FullStack developer intern for XLCINQ. Developed some modules for
                  e-commerce shops. Developped pages for businesses
                </PortfolioCard.Text>
              </PortfolioCard.Body>
              <PortfolioCard.Footer>
                <small className="text-muted">From Jan 2017 - May 2017 (Work Experience)</small>
              </PortfolioCard.Footer>
            </PortfolioCard>
          </PortfolioCol>
          <PortfolioCol>
            <PortfolioCard>
              <PortfolioCard.Body>
                <PortfolioCardImg src={Image1} />
                <PortfolioCard.Title>Government of Canada</PortfolioCard.Title>
                <PortfolioCard.Text>
                  Backend developer. I used RubyOnRails to code a WebCrawler to gather data
                  on startups in R&D.
                </PortfolioCard.Text>
              </PortfolioCard.Body>
              <PortfolioCard.Footer>
                <small className="text-muted">From Sep 2017 - Aug 2018 (Work Experience)</small>
              </PortfolioCard.Footer>
            </PortfolioCard>
          </PortfolioCol>
          <PortfolioCol>
            <PortfolioCard>
              <PortfolioCard.Body>
                <PortfolioCard.Title>UQAM SIGE</PortfolioCard.Title>
                <PortfolioCard.Text>
                  I worked as an IT Analyst for the university of Quebec.
                  I worked mainly on the backend for bugfixes and features. I worked as QA too.
                </PortfolioCard.Text>
              </PortfolioCard.Body>
              <PortfolioCard.Footer>
                <small className="text-muted">From Jan 2022 - Aug 2022 (Work Experience)</small>
              </PortfolioCard.Footer>
            </PortfolioCard>
          </PortfolioCol>
          <PortfolioCol>
            <PortfolioCard>
              <PortfolioCard.Body>
                <PortfolioCard.Title>PortfolioCard title</PortfolioCard.Title>
                <PortfolioCard.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </PortfolioCard.Text>
              </PortfolioCard.Body>
              <PortfolioCard.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </PortfolioCard.Footer>
            </PortfolioCard>
          </PortfolioCol>
        </PortfolioRow>
      </PortfolioContainer>
      <Footer />
    </>
  )
};

export default Portfolio;