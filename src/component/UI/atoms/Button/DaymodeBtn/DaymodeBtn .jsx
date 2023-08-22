import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as DaymodeBtn } from './component/UI/atoms/Button/DaymodeBtn/DaymodeBtn.svg';

const App = () => {
        return(
        <div>
            <DaymodeBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);