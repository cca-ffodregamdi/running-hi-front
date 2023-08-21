
import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as cursur } from './component/UI/atoms/else/cursur/cursur.svg';

const App = () => {
        return(
        <div>
            <cursur  fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);