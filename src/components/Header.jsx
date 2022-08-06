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
  AddImg,
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
              <div>
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
              </div>
              <MenuLi>
                <h4>TV 프로그램</h4>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기</Link>
                  </li>
                  <li>
                    <Link to="/current-shows">오늘 방영</Link>
                  </li>
                  <li>
                    <Link to="/future-releases">TV 방영 중</Link>
                  </li>
                  <li>
                    <Link to="/ratings"> 높은 평점</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>인물</h4>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">인기 인물</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <h4>More</h4>
                <SubMenuUl>
                  <li>
                    <Link to="/popular">토론 내역</Link>
                  </li>
                  <li>
                    <Link to="/current-shows">기여 랭킹</Link>
                  </li>
                  <li>
                    <Link to="/future-releases">지원</Link>
                  </li>
                  <li>
                    <Link to="/ratings">API</Link>
                  </li>
                </SubMenuUl>
              </MenuLi>
            </MenuUl>
          </MainNav>
        </LeftInner>

        {/* sub nav */}
        <SubNav>
          <AddImg>
            <img src={GrAdd} alt="" />
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
      </InnerWrap>
    </HeaderContainer>
  );
};

export default Header;
