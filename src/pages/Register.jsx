import React, { useState, useEffect } from "react";
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
  const [id, setId] = useState(""); // 빈문자열 = false  0 = false
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [pwCheckMsg, setPwCheckMsg] = useState("");
  const [pwBox, setPwBox] = useState(true);
  const [emailMsg, setEmailMsg] = useState("");
  // emailMsg = data 값 / setEmailMsg = state 를 업데이트 시켜줄 function
  const [btnActive, setBtnActive] = useState(true);
  const [emailCheck, setEmailCheck] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    // console.log(e.target.value);
  };

  const handlePassword = (e) => {
    if (e.target.value.length < 4) {
      setErrorMsg("4자 이상 써주세요");
    } else {
      setErrorMsg("");
    }
    setPassword(e.target.value);
    // console.log(e.target.value);
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
    // console.log(e.target.value);
  };

  const handleEmail = (e) => {
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(e.target.value) === true) {
      setEmailMsg("입력된 값은 이메일입니다.");
      setEmailCheck(true);
    } else {
      setEmailMsg("입력된 값은 이메일이 아닙니다.");
      setEmailCheck(false);
    }
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  const handleRegister = () => {
    console.log("click");
  };

  useEffect(() => {
    // && (=그리고) 연산자 하나라도 true가 아니면 통과가 안됩니다!
    //  || (=또는) 조건 중 하나만 true여도 통과!
    if (id && password && passwordCheck && email && !pwBox && emailCheck) {
      console.log("통과!"); // 빈문자열은 false
    } else {
      console.log("실패");
    }
  }, [id, password, passwordCheck, email, pwBox, emailCheck]);

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
              {emailMsg}
            </Fieldset>

            <Agreement>
              하단 "가입" 버튼을 눌러, TMDB의 이용약관과 개인정보 처리방침에
              대한 정독 여부와 동의를 표시합니다.
            </Agreement>
            <BtnWrap>
              <RegisterBtn
                className="active"
                type="button"
                onClick={handleRegister}
                disabled={btnActive}
              >
                회원가입
              </RegisterBtn>
              <CancelBtn>취소</CancelBtn>
            </BtnWrap>
          </InnerContainer>
        </div>
      </Container>
    </div>
  );
};

export default Register;
