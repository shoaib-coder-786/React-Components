import React from 'react'
import ToDoItem from './ToDoItem'
import { useSelector } from 'react-redux'

const ToDoList = () => {
const taskobj = useSelector((state)=>state.ToDoReducer.data)
const taskitem = taskobj.map((task)=>{

    return <ToDoItem task = {task} key={task.id}/>
})

  return (
   <>
  {taskitem}
   
   </>
  )
}
 
export default ToDoList