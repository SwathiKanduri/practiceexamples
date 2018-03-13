export function addTask(text) {
    return{
        type:'ADDTASK',
        payload:text
    };
}

export function updateField(newText){
    return{
        type:'FIELD_CHANGE',
        payload:newText
    }
}

export function deleteTask(taskId) {
    return{
        type:'DELETETASK',
        payload:taskId
    };
}