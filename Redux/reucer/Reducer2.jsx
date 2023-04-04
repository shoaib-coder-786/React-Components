const initialstate = 0 ;

function ChangeNumber(state = initialstate, action){

    switch(action.type){
        case "INCREMENT" :return  state + action.data;
        case "DECREMENT" :return  state- action.data;
        default : return state;
    }
}

export default ChangeNumber;