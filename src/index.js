import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

const root = document.getElementById('root');
let store = configureStore();


ReactDOM.render(<Root store={store}/>, root);
registerServiceWorker();
