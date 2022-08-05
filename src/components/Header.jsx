import React from "react";
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
} from "../styles/Header";
import { GrAdd } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import MovieCard from "./MovieCard";
const Header = () => {
  return (
    <HeaderContainer>
      <InnerWrap>
        <LeftInner>
          {/* logo */}
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          {/* main nav */}
          <MainNav>
            <MenuUl>
              <MenuLi>
                <h4>영화</h4>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기</Link>
                  </li>
                  <li>
                    <Link to="/current-shows">현재 상영 중</Link>
                  </li>
                  <li>
                    <Link to="/future-releases"> 개봉 예정</Link>
                  </li>
                  <li>
                    <Link to="/ratings"> 높은 평점</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>TV 프로그램</h4>
                <SubMenuUl>
                  <li>인기</li>
                  <li>현재 상영 중</li>
                  <li>개봉 예정</li>
                  <li>높은 평점</li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>인물</h4>
                <SubMenuUl>
                  <li>인기</li>
                  <li>현재 상영 중</li>
                  <li>개봉 예정</li>
                  <li>높은 평점</li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>More</h4>
                <SubMenuUl>
                  <li>인기</li>
                  <li>현재 상영 중</li>
                  <li>개봉 예정</li>
                  <li>높은 평점</li>
                </SubMenuUl>
              </MenuLi>
            </MenuUl>
          </MainNav>
        </LeftInner>

        {/* sub nav */}
        <SubNav>
          <div>
            <GrAdd />
          </div>
          <div>
            <button>KO</button>
          </div>
          <div>로그인</div>
          <div>회원가입</div>
          <div>
            <GoSearch />
          </div>
        </SubNav>
      </InnerWrap>
    </HeaderContainer>
  );
};

export default Header;
