import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = (
    <div className="ct">
        <div className="cover"></div>
        <div className="panel">
            <h1>Hello world</h1>
        </div>
    </div>
)
ReactDOM.render(
    element,
    document.getElementById('root2')
);
