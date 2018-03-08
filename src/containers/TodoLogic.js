import React from 'react';

import {addTask} from '../actions/actionsTodo'
import TodoShow from '../components/TodoShow'
import {connect} from 'react-redux'
// import storeTodo from '../storeTodo'
// import ReducerTodo from '../reducers/reducerTodo';


class TodoLogic extends React.Component{
    render(){
        return(
            <div> 
                <TodoShow  listvalue={this.props.list.map((list,index)=>{ <ul> <li> {list} </li> </ul> } ) } 
                 addtask={this.props.addTask }   />
            </div>
        );                                 
    }
}

                                                            
const mapStateToProps = (state) => {
    return {
        list:state.list
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        addTask: (userInput) => {
              dispatch(addTask(userInput));
          }
    };
  };


  export default connect(mapStateToProps,mapDispatchToProps)(TodoLogic); 


  