
 const addElem=(text)=> {
     return{
         type:'ADDELEM',
         payload:text
     };
 },

  clear=()=>{
    return{
        type:'CLEAR' 
    };
},

 equals=(value)=> {
    return{
        type:'EQUALS',
        payload:value
    };
}

export {addElem,clear,equals};



