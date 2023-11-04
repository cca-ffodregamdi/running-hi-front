// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import axios from "axios";

// // 로그인 컴포넌트 정의
// function LOGIN() {
//     return (
//         <div>

//         </div>
//     )
// }

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
      <div>
        <h4>RunningHi</h4>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="account"> </label>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              name="account"
              value={this.state.account}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password" aria-label="Password">
              {" "}
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit"> Login </button>
          </div>
        </form>
      </div>
    );
  }
}
