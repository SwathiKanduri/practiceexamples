import React from 'react';

const TodoShow=(props) => {
    return(
        <div> 
            <input  name="uinput" placeholder="enter task here"  /> 
            <button onClick={props.addtask} > add task </button>
            {props.listvalue}
        </div>
    );
}

export default TodoShow;