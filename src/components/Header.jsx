import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <LogoContainer>
          <Logo src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png" alt="Logo" />
          <LogoText>
            <WhiteText>STOCK</WhiteText>
            <Space />
            <YellowText>ARCHERY</YellowText>
          </LogoText>
        </LogoContainer>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgba(37, 37, 37, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 1.6rem; /* Reduce padding on mobile */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 0; /* Ensure no margin on mobile */
  }
`;

const Logo = styled.img`
  width: 50px; /* Increase size if needed */
  height: 50px; /* Increase size if needed */
  border-radius: 50%; /* Ensure it’s perfectly round */
  margin-right: 0.5rem; /* Space between logo and text */
  object-fit: cover; /* Ensure the image covers the circle properly */
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 50px; /* Adjust size on mobile if needed */
    height: 50px; /* Adjust size on mobile if needed */
    margin-right: 0.5rem; /* Reduce space on mobile */
  }
`;

const LogoText = styled.div`
  font-size: 3rem; /* Adjust size as needed */
  font-weight: bold; /* You can choose the desired font weight */
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 1.5rem; /* Move text to the right on mobile */
  }
`;

const WhiteText = styled.span`
  color: #fff; /* White color */
`;

const YellowText = styled.span`
  color: #febb12; /* Yellow color */
`;

const Space = styled.span`
  margin-left: 0.5rem; /* Adjust the spacing as needed */
`;

export default Header;
