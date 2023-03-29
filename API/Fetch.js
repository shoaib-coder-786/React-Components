import React, { useEffect, useState } from 'react'

 function Fetch(){
const [data , setdata] = useState(null)
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((apiData)=>{
        setdata(apiData.message);
        console.log(apiData.message);
    });

},[]);
    return (
        <>
        <div>
            <img src={data} alt="dog" width={500}/>
        </div>
        </>
    );
 }
 export default Fetch