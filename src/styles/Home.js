import styled from "styled-components";

// HERO BANNER
export const HeroBannerContainer = styled.div`
  width: 1280px;
  height: 300px;
  background: ${(props) => `url(${props.imgPath}) no-repeat center center`};
  background-size: cover;
  /* ${(props) => console.log(props)}; */
  /* "url(../assets/herobanner.jpg)"; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
`;

export const HeroBannerInnerWrap = styled.div`
  width: 100%;
  align-items: flex-start;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  /* form {
    width: 100%;
  } */
  @media (max-width: 800px) {
    padding-top: 0px;
  }
`;
export const HeroBannerText = styled.div`
  width: 100%;
  align-items: flex-start;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 50px 0;
  h2 {
    font-size: 3em;
    font-weight: 700;
    padding-bottom: 9px;
    line-height: 1;
  }
  h3 {
    font-size: 1.9em;
    font-weight: 500;
  }
  @media (max-width: 800px) {
    width: 380px;
    padding-left: 10px;
    margin-bottom: 10px;
    padding: 35px 0;
    h2 {
      font-size: 3em;
      font-weight: 700;
      padding-bottom: 9px;
      line-height: 1;
    }
    h3 {
      font-size: 2em;
      font-weight: 600;
      margin: 0;
      font-weight: 400;
    }
  }
`;

export const Searchbar = styled.form`
  width: 100%;
  display: flex;
  position: relative;

  input {
    width: 100%;
    height: 46px;
    border-radius: 30px;
    border: none;
    padding-left: 20px;
    line-height: 46px;
    font-size: 1.1em;
    padding: 10px 20px;
    box-sizing: border-box;
    outline: none;
  }
  button {
    width: 100px;
    height: 46px;
    border-radius: 30px;
    border: none;
    position: absolute;
    right: -1px;
    top: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to right,
      rgba(30, 213, 169, 1) 0%,
      rgba(1, 180, 228, 1) 100%
    );
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px 26px;
  }
  @media (max-width: 700px) {
    width: 420px;
  }
`;

// WHAT'S POPULAR
export const PopularContainer = styled.div`
  width: 1280px;
  margin: auto;
  h2 {
    font-size: 1.5em;
    font-weight: 600;
    margin-right: 20px;
  }
`;
export const PopularColumn = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
  h2 {
    font-weight: 500;
  }
`;

export const SelectorWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  border: 1px solid rgba(3, 37, 65, 1);
  border-radius: 30px;
  background-color: rgba(3, 37, 65, 1);
  /* color: #000; */
  h3 {
    padding: 4px 20px;
    a {
      background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      /* color: #000; */
      font-weight: 600;
      text-decoration: none;
    }
  }
  div:nth-child(1) {
    position: relative;
    z-index: 1;
  }
  div:nth-child(2) {
    position: relative;
    z-index: 1;
  }
  div:nth-child(3) {
    position: relative;
    z-index: 1;
  }
  div:nth-child(4) {
    position: relative;
    z-index: 1;
  }
`;
