import React from "react";
import { ReactComponent as Signupcheck } from "../../../../assets/img/signupcheck.svg";
import "../../../../assets/scss/pages/login/signUpCompletePage.scss";

const SignUpCompletePage = () => {
  return (
    <>
      <div className="signUpCompletePage">
        <div className="signUpCompletePage-container">
          <Signupcheck width="70" height="70" />
          <div className="signupComplete">회원가입이 완료되었습니다</div>
          <div className="signupplus">
            라현지 님, 회원가입을 축하드립니다 <br /> 러닝하이를 통해 다양한
            러닝 코스를 즐겨보세요!
          </div>

          <div className="redirect">
            <a href="/">
              <button className="tohome">홈으로</button>
            </a>
            <a href="/login">
              <button className="tologin">로그인 하러가기</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpCompletePage;
