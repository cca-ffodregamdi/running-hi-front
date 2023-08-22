import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as HomeBtn } from './component/UI/atoms/Button/HomeBtn/HomeBtn.svg';

const App = () => {
    return(
    <div>
        <HomeBtn fill="blue"/>
    </div>
    );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);