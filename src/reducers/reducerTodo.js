


const ReducerTodo=(state=[],action)=>{
    switch(action.type){

        case 'ADDTASK':
            state=state.concat(action.payload);
            break;
         case 'DELETETASK':
            state=state.slice();
            state.splice(action.payload,1);
            break;
    }
     return state;
}


export default ReducerTodo;