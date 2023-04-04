import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Increment,Decrement} from './Action1'

 function App(){
    const myState = useSelector((state)=>state.ChangeNumber);
    const dispatch  =  useDispatch();
    return (<>
    <h1>simple Incremenet and decrement func using redux</h1>
<button style={{backgroundColor:'black' ,color:"white"}}  onClick={()=>dispatch(Decrement(3))} >-</button>
<input type="text" value={myState}  />
<button style={{backgroundColor:'black' ,color:"white"}}  onClick={()=>dispatch(Increment(5))}  >+</button>
    </>)
 }
 export default App;