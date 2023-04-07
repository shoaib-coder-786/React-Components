import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {AddToDo} from '../Action/Action'
import cuid from "cuid";



const Addtodo = () => {
const [task , setTask] = useState('');
const dispatch = useDispatch();


function handleInputChange(e){
    setTask(e.target.value)
}


function handleFormSubmit(e){
    e.preventDefault();
dispatch(AddToDo({task: task , id:cuid()}))
    e.target.userInput.value = "";
}
  return (
<>
<form onSubmit={handleFormSubmit}>

<input type="text" name='userInput' onChange={(e)=>handleInputChange(e) } />
<button type='submit'>Add</button>

</form>


</>

  )
}

export default Addtodo