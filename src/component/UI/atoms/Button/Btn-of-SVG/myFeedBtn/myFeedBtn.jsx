
import React from 'react';
import ReactDOM from 'react-dom';
import{ ReactComponent as myFeedBtn } from './component/UI/atoms/Button/Btn-of-SVG/myFeedBtn/myFeedBtn.svg';

const App = () => {
        return(
        <div>
            <myFeedBtn fill="blue"/>
        </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);