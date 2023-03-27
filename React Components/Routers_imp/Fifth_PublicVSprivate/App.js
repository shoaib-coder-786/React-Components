import React, { useEffect, useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';

function App() {
const [user , setuser] = useState(false);

useEffect(()=>{
  const user1= localStorage.getItem('login');
  user1 ? setuser(true) : setuser(false) ;
},[])
useEffect(()=>{
  localStorage.setItem('login' , user);
},[user])


  return (
    <>
    <h1>Home page of website</h1>
    <Routes>
      <Route path='/home' element={<Home/>}/>
{!user && <Route path ='/login' element={<Login auth={()=>setuser(true)}/>}/> }
{user && <Route path='/profile'  element={<Profile logout1={()=>setuser(false)}/>}/> }


    <Route path='*' element={<Navigate to = {user?'profile':'login'}/>} />
        
    </Routes>
    
    </>
  )
}
export default App;