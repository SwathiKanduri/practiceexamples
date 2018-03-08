const initialState = {
    userInput:'',
    list: []
  }

const ReducerTodo=(state=initialState,action)=>{
    if(action.type==='ADDTASK'){
       console.log(state,action)
       return  { 
        ...state,
        list:[...state.list,action.payload]
        }     
        console.log(state,action)   
    }
    else{
        return state;
    }
}

export default ReducerTodo;