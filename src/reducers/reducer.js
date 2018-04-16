

const Reducer= (state = [],
        action) => {
switch(action.type){
        
    case 'GET_WEATHER':
           return
                [action.payload.data,...state]   
       }
       return state;
}

export default Reducer;