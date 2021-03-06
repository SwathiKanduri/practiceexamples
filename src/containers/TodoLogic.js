import React from 'react';

import {addTask,updateField,deleteTask} from '../actions/actionsTodo'
import TodoShow from '../components/TodoShow'
import {connect} from 'react-redux'
import storeTodo from '../storeTodo'
// import ReducerTodo from '../reducers/reducerTodo';


class TodoLogic extends React.Component{
    render(){
        const displayList = this.props.list.map((array,index) =>
            <ul style={{listStyle:'none'}} > <li > 
             {array} &nbsp; &nbsp; &nbsp; 
             <button onClick={()=> this.props.deleteTask(this.props.taskId)} > delete task </button>
            </li> </ul> 
            );

        return(
            <div> 
                <TodoShow   
                    updateField={this.props.updateField}
                    text={this.props.text}
                    addtask={this.props.addTask}  
                    listvalue={displayList}
                    taskId={this.props.taskId}
                />                             
            </div>
        );                                 
    }
}

                                                            
const mapStateToProps = (state) => {
    return {
        text:state.textField,
        list:state.list,
        taskId:state.taskId
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
            updateField:(newText)=> {
            dispatch(updateField(newText));
        },

        addTask: (text) => {
              dispatch(addTask(text));
        },

        deleteTask: (taskId) => {
            dispatch(deleteTask(taskId));
      },
    
  });


  export default connect(mapStateToProps,mapDispatchToProps)(TodoLogic); 


  