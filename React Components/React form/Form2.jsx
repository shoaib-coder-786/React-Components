import React, { useState } from 'react'

function Form2(){
const [fullname, setfullname] = useState({
    fname: '' ,
    lname: '',
    email : '',
})

function inputField(event){
    const {name , value} = event.target

    setfullname((prev)=>{
       return{
            ...prev,
            [name] : value,
        };
      
    }
    )
        
}

const submit = (event)=>{
        // event.preventDefault();
    alert('form submit successfully')
}
return(
<>
<form onSubmit={submit}>
    <h1>Hello !! {fullname.fname} {fullname.lname}</h1>
    <label htmlFor="text"> First Name  </label>
    <input type="text" placeholder='Enter your first name' onChange={inputField} name ='fname' value={fullname.fname} />
    <br /><br />
    <label htmlFor="text"> Last Name  </label>
    <input type="text" placeholder='Enter your Last name' onChange={inputField} name= 'lname' value={fullname.lname} />
    <br /><br />
    <label htmlFor="email"> Email  </label>
    <input type="email" placeholder='Enter your Last name' onChange={inputField} name= 'email' value={fullname.email} />
        <br /><br />
    <button type='submit'> Click me </button>

</form>

</>

);

}
export default Form2;