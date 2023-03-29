import React, { useEffect, useState } from 'react'
import axios from 'axios'
 function Axioss() {
    const [data1, setdata] = useState(null);
    useEffect(()=>{
 axios.get("https://dog.ceo/api/breeds/image/random")
 .then((resp)=>{
    setdata(resp.data.message);
 })
    },[])
  return (
    <div>
<h1>Fetching data from Axios liberary</h1>
<img src={data1} alt="dog_image" />
<img src={data1} alt="dog_image" />
    </div>
  )
}

export default Axioss
