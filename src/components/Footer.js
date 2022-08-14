
import { FooterColumn, FooterContainer, FooterSubContainer, TextSizeLarge, FooterLinkContainer, FooterLinkLine, FooterLink, TextSizeSmall } from "../styles/Footer.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <FooterContainer>
            <FooterSubContainer>
                <FooterColumn>
                    <TextSizeLarge>Projects</TextSizeLarge>
                </FooterColumn>
                <FooterColumn>
                    <TextSizeLarge>Contact</TextSizeLarge>
                    <FooterLinkContainer>
                        <TextSizeSmall>Wu Tchan Ki Cedric</TextSizeSmall>
                        <TextSizeSmall>Tel: 514-572-7372</TextSizeSmall>
                        <FooterLink href="mailto:cedric@wutchanki.com">Mail: cedric@wutchanki</FooterLink>
                        <TextSizeSmall>Montreal, Canada</TextSizeSmall>
                    </FooterLinkContainer>
                </FooterColumn>
                <FooterColumn>
                    <TextSizeLarge>Social</TextSizeLarge>
                    <FooterLinkContainer>
                        <FooterLinkLine>
                            <FontAwesomeIcon icon={faGithub} />
                            <FooterLink href="https://github.com/cedricwtk?tab=repositories">Github</FooterLink>
                        </FooterLinkLine>
                        <FooterLinkLine>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FooterLink href="https://www.linkedin.com/in/wutchankicedric/">Linkedin</FooterLink>
                        </FooterLinkLine>
                        <FooterLinkLine>
                            <FontAwesomeIcon icon={faYoutube} />
                            <FooterLink href="https://www.youtube.com/channel/UC8vbJ6DpePkGQtdSAog1nkg/videos">Youtube</FooterLink>
                        </FooterLinkLine>
                        <FooterLinkLine>
                            <FontAwesomeIcon icon={faInstagram} />
                            <FooterLink href="https://www.instagram.com/thecroworker_photography/">Instagram</FooterLink>
                        </FooterLinkLine>
                    </FooterLinkContainer>
                </FooterColumn>
            </FooterSubContainer>
        </FooterContainer >
    );
}

export default Footer;