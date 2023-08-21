import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as nightmodeBtn } from './component/UI/atoms/Button/nightmodeBtn/nightmodeBtn.svg';

const App = () => {
    return(
    <div>
        <nightmodeBtn fill="blue"/>
    </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);