
 export function addElem(text) {
     return{
         type:'ADDELEM',
         payload:text
     };
 }

 export function  clear{
    return{
        type:'CLEAR' 
    };
}

export function equals(value) {
    return{
        type:'EQUALS',
        payload:value
    };
}



