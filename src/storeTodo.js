import {createStore} from 'redux';
import ReducerTodo from './reducers/reducerTodo';




const storeTodo=createStore(ReducerTodo);

export default storeTodo;