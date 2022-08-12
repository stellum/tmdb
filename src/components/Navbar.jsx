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
  MenuUlTag,
  MenuLiTag,
  Accordion,
} from "../styles/Navbar";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  InnerWrap,
  LeftInner,
  MainNav,
  MenuUl,
  MenuLi,
  SubMenuUl,
  SubNav,
  AddImg,
  Hamburger,
} from "../styles/Header";

// const data = [
//   {
//     id: 1,
//     title: "영화",
//     list: "인기, 현재 상영 중, 개봉 예정, 높은 평점",
//   },
//   {
//     id: 2,
//     title: "TV 프로그램",
//     list: "인기, 오늘 방영, TV 방영 중, 높은 평점",
//   },
//   {
//     id: 3,
//     title: "인물",
//     list: "인기 인물",
//   },
//   {
//     id: 4,
//     title: "More",
//     list: "토론 내역, 기여 랭킹, 지원, API",
//   },
// ];

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [accordion, setAccordion] = useState(false);

  const openAccordion = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <MenuUlTag>
              <MenuLiTag>
                <NavbarLink>영화 </NavbarLink>
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
              </MenuLiTag>

              <li>
                <NavbarLink>TV 프로그램 </NavbarLink>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기</Link>
                  </li>
                  <li>
                    <Link to="/now-playing">오늘 방영</Link>
                  </li>
                  <li>
                    <Link to="/upcoming"> TV 방영 중</Link>
                  </li>
                  <li>
                    <Link to="/top-rated"> 높은 평점</Link>
                  </li>
                </SubMenuUl>
              </li>

              <li>
                <NavbarLink>인물 </NavbarLink>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기 인물</Link>
                  </li>
                </SubMenuUl>
              </li>

              <li>
                <NavbarLink>More </NavbarLink>
                <SubMenuUl>
                  <li>
                    <Link to="">토론 내역</Link>
                  </li>
                  <li>
                    <Link to="">기여 랭킹</Link>
                  </li>
                  <li>
                    <Link to="">지원</Link>
                  </li>
                  <li>
                    <Link to="">API</Link>
                  </li>
                </SubMenuUl>
              </li>
            </MenuUlTag>

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
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={openAccordion}>
            <h4>영화</h4>
            <Accordion>
              {/* {data.map((item) => {
                return;
                <Accordion key={item.id} {...item} />;
              })} */}

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
            </Accordion>
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={openAccordion}>
            <h4>TV 프로그램</h4>
            <Accordion>
              <li>
                <Link to="/popular">인기</Link>
              </li>
              <li>
                <Link to="/now-playing">오늘 방영</Link>
              </li>
              <li>
                <Link to="/upcoming"> TV 방영 중</Link>
              </li>
              <li>
                <Link to="/top-rated"> 높은 평점</Link>
              </li>
            </Accordion>
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={openAccordion}>
            <h4>인물</h4>
            <Accordion>
              <li>
                <Link to="/popular">인기 인물</Link>
              </li>
            </Accordion>
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={openAccordion}>
            <h4>More</h4>
            <Accordion>
              <li>
                <Link to="">토론 내역</Link>
              </li>
              <li>
                <Link to="">기여 랭킹</Link>
              </li>
              <li>
                <Link to="">지원</Link>
              </li>
              <li>
                <Link to="">API</Link>
              </li>
            </Accordion>
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
