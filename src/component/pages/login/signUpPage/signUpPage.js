import React, { Component } from 'react';
import './signUpPage.css';

class signUpPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

   // 아이디 중복 확인 
   checkUsernameAvailability = async () => {
    const { username } = this.state;

    // 서버에 아이디 중복 확인 요청을 보내고 응답을 받아서 isUsernameAvailable 상태를 설정
    try {
      const response = await fetch(`/api/check-username?username=${username}`);
      const data = await response.json();
      this.setState({ isUsernameAvailable: data.isAvailable });
    } catch (error) {
      console.error('아이디 중복 확인 오류:', error);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;


    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }


    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    
  };

  render() {
    return (
      <div>
       <h4>RunningHi</h4>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username"> </label>
            <input
              placeholder='아이디를 입력해주세요.'
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              placeholder='이메일을 입력해주세요.'
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              placeholder='비밀번호를 입력해주세요.'
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword"></label>
            <input
             placeholder='비밀번호를 한 번 더 입력해주세요.'
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    );
  }
}

export default signUpPage;
