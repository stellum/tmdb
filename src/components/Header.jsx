import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import {
  HeaderContainer,
  InnerWrap,
  LeftInner,
  Logo,
  MainNav,
  SubNav,
} from "../styles/Header";
import { GrAdd } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
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
            <div>영화</div>
            <div>TV 프로그램</div>
            <div>인물</div>
            <div>More</div>
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
