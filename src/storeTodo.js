import {createStore} from 'redux';
import reducers from './reducers/reducerTodo';




const storeTodo=createStore(reducers);

export default storeTodo;