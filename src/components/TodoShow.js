import React from 'react';

const TodoShow=(props) => {
    return(
        <div> 
            <input  name="uinput" onChange={(e)=> props.updateField(e.target.value)}
            placeholder="enter task here"  /> 
            <button onClick={()=> props.addtask(props.text)} > add task </button>
            {props.listvalue } 
        </div>
    );
}

export default TodoShow;