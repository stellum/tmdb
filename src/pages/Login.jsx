import React, { useEffect, useState } from "react";
import {
  Container,
  InnerContainer,
  Header,
  Fieldset,
  BtnWrap,
  RegisterBtn,
  CancelBtn,
} from "../styles/Register";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [check, setCheck] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
    // console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  const handleRegister = () => {
    console.log("click");
  };

  useEffect(() => {
    if (id && password) {
      console.log("통과!");
    }
  }, [id, password]);

  return (
    <Container>
      <InnerContainer>
        {/* HEADER */}
        <Header>
          <h3>로그인</h3>
          <p>
            TMDB 내 편집과 작품 평가를 하거나 작품 추천을 받기 위해서는,
            회원님의 계정에 로그인 해야 합니다. 만약 계정이 없다면, 무료로
            간편하게 계정을 만들 수 있습니다. <em>여기를 눌러</em> 가입하실 수
            있습니다.
          </p>
          <p>
            가입은 했는데 아직 확인 메일을 받지 못하셨다면,
            <em>여기를 눌러 </em>
            메일 재발송을 해주세요.
          </p>
        </Header>
        {/* INPUT */}
        <Fieldset>
          <p>아이디</p>
          <input type="text" value={id} onChange={(e) => handleId(e)} />
          <p>비밀번호</p>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          {}
        </Fieldset>
        {/* BUTTON */}
        <BtnWrap>
          <RegisterBtn
            className="active"
            type="button"
            onClick={handleRegister}
          >
            로그인
          </RegisterBtn>
          <CancelBtn>비밀번호 초기화</CancelBtn>
        </BtnWrap>
      </InnerContainer>
    </Container>
  );
};

export default Login;
