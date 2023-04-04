// this is the main reducer file to combine all reducer functions into this in object format; 
import ChangeNumber from './Reducer2'
import {combineReducers} from 'redux' 

const RootReducer = combineReducers({
    ChangeNumber :ChangeNumber
})
export default RootReducer;