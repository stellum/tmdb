import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: rgba(3, 37, 65, 1);
  margin: 0 auto;
`;

export const InnerWrap = styled.div`
  width: 1300px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
`;
export const LeftInner = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.a`
  cursor: pointer;
  img {
    width: 154px;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margin-left: 25px;
`;
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  /* div {
    padding: 20px;
  } */
`;
export const MenuLi = styled.li`
  &:hover {
    /* background-color: yellow; */
    /* color: #000; */
    ul {
      display: block;
    }
  }

  h4 {
    padding: 10px 10px;
    margin: 0;
    cursor: pointer;
  }
`;

export const SubMenuUl = styled.ul`
  display: none;
  position: absolute;
  background-color: #fff;
  padding: 8px 55px 8px 15px;
  list-style: none;
  border-radius: 4px;
  width: 200px;
  margin: 0;
  padding: 0;

  li {
    display: block;
    padding: 8px 55px 8px 15px;
    a {
      text-decoration: none;
      &:visited {
        color: transparent;
      }
    }
    &:hover {
      background-color: rgba(219, 219, 219, 1);
      padding-right: 20px;
      cursor: pointer;
    }
  }
`;

export const SubNav = styled.nav`
  width: 350px;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  div:nth-child(1) {
    color: white;
    font-size: 1.3em;
  }
  div:nth-child(2) {
    /* background-color: transparent;
    color: white;
    display: inline-block; */
  }
  div:nth-child(5) {
    color: rgba(1, 119, 210, 1);
    font-size: 1.3em;
  }
  a {
    text-decoration: none;
    &:visited {
      color: white;
    }
  }
`;

export const AddImg = styled.a`
  img {
    width: 154px;
    background-color: white;
  }
`;
