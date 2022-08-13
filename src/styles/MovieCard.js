import styled from "styled-components";

export const CardWrap = styled.div`
  /* width: 215px; */
  position: relative;
  margin-top: 50px;
  margin-bottom: 30px;
  /* background-color: blue; */
`;
export const Options = styled.div`
  right: 4px;
  top: 10px;
  position: absolute;

  div {
    cursor: pointer;
  }
`;
export const Movie = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const TextWrap = styled.div`
  position: absolute;
  margin-top: 20px;
  text-align: left;
  line-height: 23px;
  font-size: 1em;
  h1 {
    font-weight: 600;
    text-decoration: none;
    color: #000;
    &:hover {
      color: #01b4e4;
    }
  }
  p {
    color: #a2a2a2;
    font-size: 15px;
  }
`;
