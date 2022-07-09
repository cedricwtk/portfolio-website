import React from "react";
import {NavbarContainer, LeftNavContainer, RightNavContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo} from "../styles/Navbar.style";
import LogoImg from "../assets/Logo.png"
function Navbar() {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
            <LeftNavContainer>
            <NavbarLink to="/"><Logo src={LogoImg}></Logo></NavbarLink>
            </LeftNavContainer>
            <RightNavContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/">Portfolio</NavbarLink>
                    <NavbarLink to="/">Resume</NavbarLink>
                    <NavbarLink to="/">About</NavbarLink>
                    <NavbarLink to="/">Social</NavbarLink>
                </NavbarLinkContainer>
            </RightNavContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer>

            </NavbarExtendedContainer>
        </NavbarContainer>
    );
}

export default Navbar;
