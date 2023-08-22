// import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as CancelBtn } from './component/UI/atoms/Button/cancelButton/cancelButton.svg';

const App = () => {
        return(
        <div>
            <CancelBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);