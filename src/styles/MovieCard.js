import styled from "styled-components";

export const CardWrap = styled.div`
  width: 215px;
  position: relative;
`;
export const MovieImg = styled.div`
  display: flex;
  flex-direction: row-reverse;
  right: 4px;
  top: 10px;
  position: absolute;
`;
export const Movie = styled.img`
  border-radius: 8px;
`;

export const TextWrap = styled.div`
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
