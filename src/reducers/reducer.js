const calcState = {
        value: 0,
        btns: [ "clear", "=", "0", "/", "7", "8", "9", "*", "4", "5", "6", "+", "1", "2", "3", "-" ]
    }

const Reducer= (state = calcState,
        action) => {
switch(action.type){
    case 'ADDELEM':
           return{
                   ...state,
                   value: state.value == '0' ? action.payload : state.value + action.payload
           }
    case 'CLEAR':
            return{
                    ...state,
                    value:0
           }
     case 'EQUALS':
            return{
                    ...state,
                    value:eval(action.payload)
            }
            default: return state;
}
}

export default Reducer;