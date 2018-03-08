import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import CounterLogic from './containers/counterlogic'
import store from './store'
import TodoLogic from './containers/TodoLogic'
import storeTodo from './storeTodo'



ReactDOM.render(
<Provider store={storeTodo}>
    <TodoLogic />
</Provider>,    
document.getElementById('root'));


registerServiceWorker();
