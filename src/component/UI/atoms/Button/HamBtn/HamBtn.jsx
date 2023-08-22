import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as HamBtn } from './component/UI/atoms/Button/HamBtn/HamBtn.svg';

const App = () => {
        return(
        <div>
            <HamBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);