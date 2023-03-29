import React, { useEffect, useState } from 'react'

function PracticeAPI() {
    const [data , setdata] = useState([]);

    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/comments")
.then((resp)=>resp.json())
.then((json1)=>{setdata(json1)
})
    },[])

  return (
   <>
   <h1>email</h1>
   <div>
    {data.map(item=>{
        return (
           <div >{item.email}</div>
            )
    }) }
   </div>
   </>
  )
}
export default PracticeAPI;