import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "../../../../../src/assets/scss/pages/login/loginPage.scss";
import axios from "axios";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { account, password } = this.state;
    console.log("account:", account);
    console.log("password:", password);

    axios
      .post("http://localhost:8080/api/v1/sign-in", this.state)
      .then(function (resp) {
        console.log(resp.data);
        if (account !== null && password !== null) {
          // this.setState({ isLoggedIn: true });
          alert("로그인 성공!");
        }
      })
      .catch(function (err) {
        alert(err);
      });

    // if (account === "account" && password === "password") {
    //   this.setState({ isLoggedIn: true }); // 로그인 성공 시 상태 업데이트
    // } else {
    //   alert("로그인에 실패하였습니다.");
    // }
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <div>로그인 성공!</div>;
    }

    return (
      <div className="container">
        <div className="login-container">
          <div className="form-container">
            <div className="login">LOGIN</div>
            <div className="logoname">
              <a href="/">RUNNINGHI</a>
            </div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="아이디를 입력해 주세요"
                name="account"
                value={this.state.account}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <btn className="opacity" type="submit">
                로그인
              </btn>
            </form>
            <div className="register">
              <div className="signupletter">아직 회원이 아니신가요?</div>
              <a className="signup" href="/signup">
                회원가입 하러가기
              </a>
              <div className="forget">
                <a className="findid" href="/findid">
                  아이디 찾기
                </a>
                <a className="findpw" href="/findpw">
                  비밀번호 찾기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
