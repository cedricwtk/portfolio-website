import React, { useState } from "react";
import {FooterColumn, FooterContainer, FooterSubContainer, TextSizeLarge} from "../styles/Footer.style";
function Footer(){
    return(
        <FooterContainer>
        <FooterSubContainer>
            <FooterColumn>
                <TextSizeLarge>Projects</TextSizeLarge>
            </FooterColumn>
            <FooterColumn>
            <TextSizeLarge>Contact</TextSizeLarge>
            </FooterColumn>
            <FooterColumn>
            <TextSizeLarge>Social</TextSizeLarge>
            </FooterColumn>
        </FooterSubContainer>
        </FooterContainer>
    );
}

export default Footer;