export const AddToDo=(message)=>{
    return ({
        type : "ADDToDo",
        message,
    })
}
export const DeleteToDo=(id)=>{
    return ({
        type : "DELETEToDo",
        id,
    })
}
export const UpdateToDo=({message,id})=>{
    return ({
        type : "UPDATEToDo",
        message : message ,
        id ,
    }
    )
}