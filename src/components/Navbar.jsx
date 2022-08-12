import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  InnerWrap,
  LeftInner,
  // Logo,
  MainNav,
  MenuUl,
  MenuLi,
  SubMenuUl,
  SubNav,
  AddImg,
  Hamburger,
} from "../styles/Header";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/movie">
              영화
              <SubMenuUl>
                <li>
                  <Link to="/popular">인기</Link>
                </li>
                <li>
                  <Link to="/now-playing">현재 상영 중</Link>
                </li>
                <li>
                  <Link to="/upcoming"> 개봉 예정</Link>
                </li>
                <li>
                  <Link to="/top-rated"> 높은 평점</Link>
                </li>
              </SubMenuUl>
            </NavbarLink>
            <NavbarLink to="/tv"> TV 프로그램</NavbarLink>
            <NavbarLink to="/people">인물</NavbarLink>
            <NavbarLink to="/more">More</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((currentval) => !currentval);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          {/* <Link to="/"> */}
          <Logo src={logo}></Logo>
          {/* </Link> */}
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/movie"> 영화</NavbarLinkExtended>
          <NavbarLinkExtended to="/tv"> TV 프로그램</NavbarLinkExtended>
          <NavbarLinkExtended to="/people">인물</NavbarLinkExtended>
          <NavbarLinkExtended to="/more">More</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
