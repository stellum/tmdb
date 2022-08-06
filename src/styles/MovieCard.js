import styled from "styled-components";

export const CardWrap = styled.div`
  /* width: 215px; */
  position: relative;
  margin-top: 100px;
  margin-bottom: 30px;
`;
export const MovieImg = styled.div`
  right: 4px;
  top: 10px;
  position: absolute;
  div {
    cursor: pointer;
  }
`;
export const Movie = styled.img`
  border-radius: 8px;
`;

export const TextWrap = styled.div`
  position: absolute;
  margin-top: 20px;
  text-align: left;
  line-height: 23px;
  h1 {
    font-weight: 600;
  }
  p {
    color: #a2a2a2;
    font-size: 15px;
  }
`;
