import './styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv);

if (module.hot) {
    module.hot.accept();
}