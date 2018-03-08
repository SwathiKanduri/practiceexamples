export function addTask(userInput) {
    return{
        type:'ADDTASK',
        payload:userInput
    };
}