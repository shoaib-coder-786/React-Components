import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Home() {
const move = useNavigate()
  return (
    <div>Home Page 1
<br />
<button onClick={()=>move('/contact')}>Move to Contact us</button>
</div>
  )
}


//useNavigate is a router hook which is used for navigation 
/* useNavigate is a new hook introduced in React Router v6 and it is extremely useful and easy to use.

Uses:
Go to the previous or next pages
Redirect user to a specific Url */