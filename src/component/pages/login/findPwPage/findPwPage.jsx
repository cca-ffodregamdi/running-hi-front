import React from "react";
import "../../../../assets/scss/pages/login/findPwPage.scss";

function FindPwPage() {
  return (
    <div className="findPwPage">
      <div className="findPwPage-container">
        <div className="findPwPage-form-container">
          <div className="findPw-name">비밀번호 찾기</div>
          <div className="findPw-logoname">
            <a href="/">RUNNINGHI</a>
            <hr />
            <div className="findPw-message">
              회원가입 시 등록한 <br /> 아이디와 이메일을 입력해주세요
            </div>
            <div>
              <div>
                <input
                  className="idInput"
                  placeholder="아이디를 입력해 주세요."
                ></input>
              </div>
              <div>
                <input
                  className="emailInput"
                  placeholder="이메일을 입력해 주세요."
                ></input>
              </div>
              <div className="findbtns">
                <button className="findPwBtn">비밀번호 찾기</button>
                <button className="gotologin">로그인 하러가기</button>
              </div>
              <div className="findIdText">
                <div className="findId-msg">아이디를 잊어버렸나요?</div>
                <a href="/findid" className="gotofindId">
                  아이디 찾으러 가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindPwPage;
