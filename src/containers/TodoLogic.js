import React from 'react';

import {addTask,updateField} from '../actions/actionsTodo'
import TodoShow from '../components/TodoShow'
import {connect} from 'react-redux'
import storeTodo from '../storeTodo'
// import ReducerTodo from '../reducers/reducerTodo';


class TodoLogic extends React.Component{
    render(){
        const displayList = this.props.list.map((array,index) =>
            <ul style={{listStyle:'none'}} > <li > 
            <input key={index} type="checkbox"  /> {array}
            </li> </ul> 
            );

        return(
            <div> 
                <TodoShow   
                    updateField={this.props.updateField}
                    text={this.props.text}
                    addtask={this.props.addTask}  
                    listvalue={displayList}
                />                             
            </div>
        );                                 
    }
}

                                                            
const mapStateToProps = (state) => {
    return {
        text:state.textField,
        list:state.list
       
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
            updateField:(newText)=> {
            dispatch(updateField(newText));
        },

        addTask: (text) => {
              dispatch(addTask(text));
        },
    
  });


  export default connect(mapStateToProps,mapDispatchToProps)(TodoLogic); 


  