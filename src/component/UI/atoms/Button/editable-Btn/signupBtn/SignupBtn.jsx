import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as signupBtn } from './component/UI/atoms/Button/signupBtn/signupBtn.svg';

const App = () => {
    return(
    <div>
        <signupBtn fill="blue"/>
    </div>
    );
};

const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);
appRoot.render(<App />);