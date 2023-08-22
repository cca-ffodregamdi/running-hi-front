import React from 'react';
import ReactDOM from 'react-dom'; // 이 부분을 추가
import{ ReactComponent as loginBtn } from './component/UI/atoms/Button/loginBtn/loginBtn.svg';

const App = () => {
    return(
    <div>
        <loginBtn fill="blue"/>
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));