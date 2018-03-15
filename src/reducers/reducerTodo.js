const initialState = {
    textField:'',
    list: [],
    taskId:''
  }

const ReducerTodo=(state=initialState,action)=>{
    switch(action.type){
        case 'FIELD_CHANGE':
        console.log(state,action) 
            return{
                ...state,
                textField:action.payload
            };
        case 'ADDTASK':
        console.log(state,action) 
            return  { 
                textField:'',
            list:[...state.list,action.payload]
            };    
         case 'DELETETASK':
             return  { 
          ...state.list.splice(action.payload,1)
             };    
        


        default: return state;
    }
}

export default ReducerTodo;