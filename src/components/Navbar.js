import React, { useState } from "react";
import { NavbarContainer, LeftNavContainer, RightNavContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended } from "../styles/Navbar.style";
import LogoImg from "../assets/Logo.png"


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftNavContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftNavContainer>
                <RightNavContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/portfolio">Portfolio</NavbarLink>
                        <NavbarLink to="/">Resume</NavbarLink>
                        <NavbarLink to="/">About</NavbarLink>
                        <NavbarLink to="/">Social</NavbarLink>
                        <OpenLinksButton onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}>
                            {extendNavbar ? <> &#10005;</> : <>&#8801; </>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightNavContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/">Portfolio</NavbarLinkExtended>
                    <NavbarLinkExtended to="/">Resume</NavbarLinkExtended>
                    <NavbarLinkExtended to="/">About</NavbarLinkExtended>
                    <NavbarLinkExtended to="/">Social</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default Navbar;
