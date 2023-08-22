import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as DropdownBtn } from './component/UI/atoms/Button/DropdownBtn/DropdownBtn.svg';

const App = () => {
        return(
        <div>
            <DropdownBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);