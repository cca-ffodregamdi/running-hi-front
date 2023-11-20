import React from "react";
import "../../../../assets/scss/pages/login/findIdPage.scss";

function FindIdPage() {
  return (
    <div className="findIdPage">
      <div className="findIdPage-container">
        <div className="findIdPage-form-container">
          <div className="findId-name">아이디 찾기</div>
          <div className="findId-logoname">
            <a href="/">RUNNINGHI</a>
            <hr />
            <div className="findId-message">
              회원가입 시 등록한 <br /> 이름과 이메일을 입력해주세요
            </div>
            <div>
              <div>
                <input
                  className="nameInput"
                  placeholder="이름을 입력해 주세요."
                ></input>
              </div>
              <div>
                <input
                  className="emailInput"
                  placeholder="이메일을 입력해 주세요."
                ></input>
              </div>
              <div className="findbtns">
                <button className="findIdBtn">아이디 찾기</button>
                <button className="gotologin">로그인 하러가기</button>
              </div>
              <div className="findPwText">
                <div className="findPW-msg">비밀번호를 잊어버렸나요?</div>
                <div className="findBtn">
                  <a href="/findpw" className="gotofindPw">
                    비밀번호 찾으러 가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindIdPage;
