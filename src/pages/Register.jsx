import React, { useState } from "react";
import {
  Container,
  InnerContainer,
  Header,
  Fieldset,
  Agreement,
  BtnWrap,
  RegisterBtn,
  CancelBtn,
} from "../styles/Register";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [pwCheckMsg, setPwCheckMsg] = useState("");
  const [pwBox, setPwBox] = useState(true);

  const handleId = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    if (e.target.value.length < 4) {
      setErrorMsg("4자 이상 써주세요");
    } else {
      setErrorMsg("");
    }
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordCheck = (e) => {
    if (password === e.target.value) {
      setPwCheckMsg("비밀번호가 일치합니다");
      setPwBox(false);
    } else {
      setPwCheckMsg("비밀번호가 일치하지 않습니다");
      setPwBox(true);
    }
    setPasswordCheck(e.target.value);
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InnerContainer>
            {/* header */}
            <Header>
              <h3>회원가입</h3>
              <p>
                누구나 쉽게 가입할 수 있습니다. 가입을 위해 아래 양식을
                채워주세요. 계속하려면 자바스크립트가 설치되어야 합니다.
              </p>
            </Header>

            {/* form */}
            <Fieldset>
              <p>아이디</p>
              <input type="text" value={id} onChange={(e) => handleId(e)} />
              <p>비밀번호 (최소 4자)</p>
              <input
                type="password"
                value={password}
                onChange={(e) => handlePassword(e)}
              />
              {errormsg}
              <p>비밀번호 확인</p>
              <input
                className={pwBox === true ? "inputBox" : ""}
                type="password"
                value={passwordCheck}
                onChange={(e) => handlePasswordCheck(e)}
              />
              {pwCheckMsg}
              <p>이메일</p>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </Fieldset>

            <Agreement>
              하단 "가입" 버튼을 눌러, TMDB의 이용약관과 개인정보 처리방침에
              대한 정독 여부와 동의를 표시합니다.
            </Agreement>
            <BtnWrap>
              <RegisterBtn>회원가입</RegisterBtn>
              <CancelBtn>취소</CancelBtn>
            </BtnWrap>
          </InnerContainer>
        </div>
      </Container>
    </div>
  );
};

export default Register;
