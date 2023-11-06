import React from "react";
import "../../../../../src/assets/scss/pages/login/signUpPage.scss";

function SignUpPage() {
  return (
    <div className="container">
      <div className="signup-container">
        <div className="form-container">
          <div className="signup">SIGNUP</div>
          <div className="logoname">
            <a href="/">RUNNINGHI</a>
          </div>
          <form>
            <div id="info__id">
              <input
                type="text"
                placeholder="아이디를 입력해 주세요"
                name="account"
              />
              <button className="nestedcheck">중복 확인</button>
            </div>
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              name="password"
            />
            <input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해 주세요"
              name="repassword"
            />
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              name="username"
            />
            <div id="info__nickname">
              <input
                type="text"
                placeholder="사용하실 닉네임을 입력해 주세요"
                name="nickname"
              />
              <button className="nestedchecknick">중복 확인</button>
            </div>
            {/* 이메일 */}
            {/* 성별이랑 연령대 받는 드롭다운 창 */}
            {/* <div class="box gender">
              <div class="gender__selected">직접 선택</div>
              <ul class="gender__list">
                <li class="option">여성</li>
                <li class="option">남성</li>
                <li class="option">밝히고 싶지 않음</li>
              </ul>
            </div> */}
            {/* JS 기능 구현하면서 추가 수정 필요 -> active event 때문에! */}
            <button className="opacity" type="submit">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/*

회원가입 예외처리 정규표현식
[v] 1. 이메일은 영문 소문자와 숫자로만 이루어지며, 3~30자로 @, .이 반드시 포함된다. 
[v] 2. 아이디는 5~20자, 영문 소문자, 숫자로 이루어진다. 특수문자 금지
[v] 3. 비밀번호는 8~16자, 영문 대 or 소문자, 숫자, 특수문자로 이루어진다.
[v] 4. 이름은 2~5자, 특수문자, 숫자, 영문을 제외한 한글로만 이루어진다.
[v] 5. 닉네임은 3~8자 이내의 한글, 영문(소/대문자), 숫자로 이루어진다. 특수문자 금지
[v] 6. 인풋값이 조건을 만족하면서 창을 다 채웠을 경우에만 버튼이 활성화된다.

아이디 - 비밀번호 - 비밀번호 확인 - 이름 - 이메일 - 닉네임 - 사는 곳 위치 / 확인 버튼
🚨 예외처리를 생각할 때 늘 공백과 0을 생각한다. [+ 이메일 인증]

*/

export default SignUpPage;
