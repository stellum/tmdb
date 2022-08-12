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
  @media screen and (max-width: 800px) {
    width: 100%;
    box-sizing: border-box;
  }
`;
export const LeftInner = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 800px) {
    display: ${({ hamburgerOpen }) => (hamburgerOpen ? "inline" : "none")};
  }
`;
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  /* div {
    padding: 20px;
  } */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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
  @media screen and (max-width: 800px) {
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
  top: 60px;

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
  @media screen and (max-width: 800px) {
    display: none;
  }
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

// export const Hamburger = styled.div`
//   display: none;
//   width: 25px;
//   height: 25px;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   &:hover {
//     div {
//       &:nth-child(1) {
//         top: 50%;
//         transform: rotate(45deg);
//       }
//     }
//     div {
//       &:nth-child(2) {
//         display: none;
//       }
//     }
//     div {
//       &:nth-child(3) {
//         top: 50%;
//         transform: rotate(-45deg);
//       }
//     }
//   }
//   div {
//     height: 2px;
//     width: 100%;
//     background-color: #fefefe;
//     position: absolute;
//     transition: transform 0.3s ease-in;
//     &:nth-child(1) {
//       top: 0;
//     }
//     &:nth-child(2) {
//       top: 50%;
//       transform: translateY(-50%); // 오ㅐ 두번째만 transform을 주는가?
//     }
//     &:nth-child(3) {
//       bottom: 0;
//     }
//   }

//   @media screen and (max-width: 800px) {
//     display: block;
//   }
// `;

export const Hamburger = styled.a`
  display: none;
  width: 25px;
  height: 25px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  /* display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  color: rgb(255, 45, 45); */

  &:hover {
    div {
      &:nth-child(1) {
        top: 50%;
        transform: rotate(45deg);
      }
    }
    div {
      &:nth-child(2) {
        display: none;
      }
    }
    div {
      &:nth-child(3) {
        top: 50%;
        transform: rotate(-45deg);
      }
    }
  }
  div {
    height: 2px;
    width: 100%;
    background-color: #fefefe;
    position: absolute;
    transition: transform 0.3s ease-in;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%); // 오ㅐ 두번째만 transform을 주는가?
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }

  @media screen and (max-width: 800px) {
    display: block;

    &:active {
      display: flex;
    }
  }
`;
