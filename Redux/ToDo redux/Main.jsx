import React from "react";
import Addtodo from "./Components/Addtodo";
import ToDoList from './Components/ToDoList'


const Main=()=>{
    return(<>
    <h1>This is To Do app made by shoaib</h1>
    <h1>Persist redux is also used in this app</h1>
<Addtodo/>
<ToDoList/>

    </>)
}
export default Main;