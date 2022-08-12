import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: rgba(3, 37, 65, 1);

  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;

  a {
    width: fit-content;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.div`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;

  /* padding: 20px 10px */

  @media (max-width: 700px) {
    /* display: none; */
  }
`;

export const NavbarLinkExtended = styled.div`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  &.active {
    ul {
      display: block;
    }
  }

  h4 {
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  min-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  color: white;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MenuUlTag = styled.ul`
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const MenuLiTag = styled.li`
  &:hover {
    ul {
      display: block;
    }
  }
`;

export const Accordion = styled.ul`
  padding: 10px;
  /* background-color: #fff; */
  width: 100%;
  display: none;

  li {
    height: 40px;
    text-align: center;
    line-height: 40px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
