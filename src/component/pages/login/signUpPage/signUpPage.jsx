import React, { useState } from "react";
import "../../../../assets/scss/pages/login/signUpPage.scss";

function SignupPage() {
  const [name, setName] = useState("");

  // return()
}

/*

회원가입 로직 
[v] 1. 메일에는 @를 반드시 포함해야한다.
[v] 2. 비밀번호는 8자 이상이며, 특수문자와 대문자를 포함해야한다. 
[v] 3. 메일과 비밀번호가 조건을 만족하면서 인풋 창을 다 채웠을 경우에 버튼이 활성화된다.

이름 / 이메일 / 아이디 / 비밀번호 / 비밀번호 재확인

*/

export default SignupPage;
