import styled from "styled-components";

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

export const InnerContainer = styled.div``;
export const Header = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
`;

export const Fieldset = styled.form`
  margin-top: 30px;
  p {
    color: #2c3034;
  }
  input {
    width: 700px;
    padding: 10px;
    margin: 5px 0 20px 0;
  }
  .inputBox:focus {
    outline-color: red;
  }
`;

export const Agreement = styled.div`
  padding: 15px 0 30px 0;
  color: #2c3034;
`;

export const BtnWrap = styled.div`
  display: flex;
`;

export const RegisterBtn = styled.button`
  display: block;
  width: 100px;
  background-color: #01b4e4;
  color: white;
  border-radius: 7px;
  padding: 9px;
  font-size: 16px;
  font-weight: 500;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(3, 37, 65, 1);
  }
`;

export const CancelBtn = styled.button`
  display: block;
  padding-left: 12px;
  background-color: transparent;
  color: #01b4e4;
  font-size: 16px;
  border-style: none;
  cursor: pointer;
`;
