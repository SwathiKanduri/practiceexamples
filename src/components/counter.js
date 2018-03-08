import React from 'react';


const Counter=(props) => {
    
        return(
           <p> Clicked: {props.value} times <br/>
           <button onClick={props.onIncrement} > + </button>
           <button onClick={props.onDecrement} > - </button>
           </p>
        );  
};


export default Counter;