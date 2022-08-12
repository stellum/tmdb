import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  InnerWrap,
  LeftInner,
  Logo,
  MainNav,
  MenuUl,
  MenuLi,
  SubMenuUl,
  SubNav,
  AddImg,
  Hamburger,
} from "../styles/Header";
import { GrAdd } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import MovieCard from "./MovieCard";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    // console.log(hamburgerOpen);
  };

  return (
    <HeaderContainer>
      <InnerWrap>
        <LeftInner>
          {/* logo */}

          <Logo>
            <Link to="/">
              <img src={logo} alt={logo} />
            </Link>
          </Logo>

          {/* main nav */}
          <MainNav hamburgerOpen={hamburgerOpen}>
            <MenuUl>
              {/* <div> */}
              <MenuLi>
                <h4>영화</h4>
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
              </MenuLi>
              {/* </div> */}
              <MenuLi>
                <h4>TV 프로그램</h4>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기</Link>
                  </li>
                  <li>
                    <Link to="/now-playing">오늘 방영</Link>
                  </li>
                  <li>
                    <Link to="">TV 방영 중</Link>
                  </li>
                  <li>
                    <Link to="/top-rated"> 높은 평점</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>인물</h4>
                <SubMenuUl>
                  <li>
                    <Link to="">인기 인물</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>More</h4>
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
              </MenuLi>
            </MenuUl>
          </MainNav>
        </LeftInner>

        {/* sub nav */}
        <SubNav>
          <AddImg>
            <GrAdd />
          </AddImg>
          <div>
            <button>KO</button>
          </div>
          <div>로그인</div>
          <div>
            <Link to="/register">회원가입</Link>
          </div>
          <div>
            <GoSearch />
          </div>
        </SubNav>
        <Hamburger onClick={toggleHamburger}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </InnerWrap>
    </HeaderContainer>
  );
};

export default Header;
