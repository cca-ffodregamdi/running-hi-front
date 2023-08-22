
import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as myPageBtn } from './component/UI/atoms/Button/myPageBtn/myPageBtn.svg';

const App = () => {
        return(
        <div>
            <myPageBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);