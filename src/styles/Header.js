import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: rgba(3, 37, 65, 1);
  margin: 0 auto;
`;

export const InnerWrap = styled.div`
  width: 1300px;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
export const LeftInner = styled.div`
  display: flex;
`;
export const Logo = styled.a`
  img {
    width: 154px;
  }
`;

export const MainNav = styled.nav`
  width: 250px;
  display: flex;
  justify-content: space-between;
  color: white;
  margin-left: 25px;
  div:hover {
    color: navy;
    cursor: pointer;
  }
`;

export const SubNav = styled.nav`
  width: 350px;
  display: flex;
  color: white;
  justify-content: space-evenly;
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
`;
