import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteToDo,UpdateToDo} from '../Action/Action'

const ToDoItem = ({task}) => {
const [isUpdate, setIsUpdate] = useState(false);
const dispatch = useDispatch();
const textRef = useRef(null)

function editItemToState(e){
  e.preventDefaault();
  dispatch(UpdateToDo ({message:textRef.current.value, id: task.id}));
  setIsUpdate(false);
  textRef.current = null;
 

}
const renderForm =()=>{
  return (
   < form onSubmit={editItemToState}>
 
   <input ref={textRef} type="text" defaultValue={task.task}/>   
   <button type="submit"> Edit Please</button>
   </form>
  ); 
};

const renderItem=()=>{
  return (
    <> 
    <h4>{task.task } 
  <button onClick={()=>setIsUpdate(true)} >Edit</button>
  <button onClick={()=>dispatch(DeleteToDo(task.id))}>Delete</button></h4>
 </>
  );
}


  return <> {isUpdate ? renderForm() : renderItem()} </>
  
}

export default ToDoItem 