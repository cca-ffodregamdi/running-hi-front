import React from "react";
import AuthForm from "../../../UI/organisms/authForm/authForm.tsx";
import "../../../../../src/assets/scss/pages/login/signUpPage.scss";

function SignUpPage() {
  return (
    <div className="signupPage">
      <div className="signup-container">
        <div className="signup-form-container">
          <div className="signup-name">SIGNUP</div>
          <div className="signup-logoname">
            <a href="/">RUNNINGHI</a>
          </div>
          <AuthForm />
          <div className="signup-message">회원가입을 완료하시겠습니까?</div>
          <a href="/signupComplete">
            <button type="submit" className="regist">
              회원가입 하기
            </button>
          </a>
        </div>
      </div>
    </div>
  );
  /*

회원가입 예외처리 정규표현식
[v] 1. 이메일은 영문 소문자와 숫자로만 이루어지며, 3~30자로 @, .이 반드시 포함된다. 
[v] 2. 아이디는 5~16자, 영문 소문자, 숫자로 이루어진다. 특수문자 금지
[v] 3. 비밀번호는 8~16자, 영문 대 or 소문자, 숫자, 특수문자로 이루어진다.
[v] 4. 이름은 2~5자, 특수문자, 숫자, 영문을 제외한 한글로만 이루어진다.
[v] 5. 닉네임은 3~8자 이내의 한글, 영문(소/대문자), 숫자로 이루어진다. 특수문자 금지
[v] 6. 인풋값이 조건을 만족하면서 창을 다 채웠을 경우에만 버튼이 활성화된다.

아이디 - 비밀번호 - 비밀번호 확인 - 이름 - 이메일 - 닉네임 - 위치 - 성별 - 연령대 / 확인 버튼
🚨 예외처리를 생각할 때 늘 공백과 0을 생각한다. [+ 이메일 인증] 공백 금지해!

*/
}

export default SignUpPage;
