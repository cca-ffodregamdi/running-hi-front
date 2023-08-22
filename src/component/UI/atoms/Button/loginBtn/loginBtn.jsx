import React from 'react';
import ReactDOM from 'react-dom'; // 이 부분을 추가
// import App from './App'; // 실제 애플리케이션 컴포넌트를 가져옴

const App = () => (
    <div>
       <a href="#">LOGIN</a>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));