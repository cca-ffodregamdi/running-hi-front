import React, { Component } from "react";
import "./loginPage.css";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "user" && password === "password") {
      this.setState({ isLoggedIn: true }); // 로그인 성공 시 상태 업데이트
    } else {
      alert("로그인에 실패하였습니다.");
    }
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
            <label htmlFor="username"> </label>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              name="username"
              value={this.state.username}
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

export default LoginPage;
