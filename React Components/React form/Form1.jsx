import React, { useState } from 'react'

function Form1() {
    const [Name, setName] = useState('');
    const [fullName, setFullName] = useState('');
 

    function inp(event) {    
      setName(event.target.value)
    }

   


    const submit = () => {
    setFullName(Name);
    setName("")
    }
    return (<>
        <div>
            <h1>hello !!  {fullName}</h1>
           
            <input type="text" placeholder='Enter Your Name 💕'  onChange={inp} value={Name}/><br />
           <br />
            <button onClick={submit}>Click Me👍</button>
        </div>

    </>);
}
export default Form1;