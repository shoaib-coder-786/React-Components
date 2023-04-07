const initialState = {data:[],}

const ToDoReducer=(state = initialState , action)=>{

        switch (action.type){

            case "ADDToDo" : return {
                ...state,
                data : [...state.data , action.message]
               
            };
            case "DELETEToDo" : return { 
                ...state,
                data : [...state.data.filter((todo)=>todo.id !== action.id )]
            };
            case "UPDATEToDo" : return {
                ...state,
                data: [...state.data.filter((todo)=>todo.id !== action.id), {task:action.message , id:action.id}],
            };
            default : return state;

        }
}
export default ToDoReducer