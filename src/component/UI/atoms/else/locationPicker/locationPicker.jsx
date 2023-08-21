
import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as locationPicker } from './component/UI/atoms/else/locationPicker/locationPicker.svg';

const App = () => {
        return(
        <div>
            <locationPicker fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);