import React from "react";
import {
  Container,
  Header,
  Fieldset,
  Agreement,
  BtnWrap,
  RegisterBtn,
  CancelBtn,
} from "../styles/Register";

const Register = () => {
  return (
    <div>
      <Container>
        {/* header */}
        <Header>
          <h3>회원가입</h3>
          <p>
            누구나 쉽게 가입할 수 있습니다. 가입을 위해 아래 양식을 채워주세요.
            계속하려면 자바스크립트가 설치되어야 합니다.
          </p>
        </Header>

        {/* form */}
        <Fieldset>
          <p>아이디</p>
          <input type="text" />
          <p>비밀번호 (최소 4자)</p>
          <input type="text" />
          <p>비밀번호 확인</p>
          <input type="text" />
          <p>이메일</p>
          <input type="text" />
        </Fieldset>

        <Agreement>
          하단 "가입" 버튼을 눌러, TMDB의 이용약관과 개인정보 처리방침에 대한
          정독 여부와 동의를 표시합니다.
        </Agreement>
        <BtnWrap>
          <RegisterBtn>회원가입</RegisterBtn>
          <CancelBtn>취소</CancelBtn>
        </BtnWrap>
      </Container>
    </div>
  );
};

export default Register;
