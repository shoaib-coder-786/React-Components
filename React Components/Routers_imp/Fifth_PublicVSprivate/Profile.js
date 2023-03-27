import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Route,Routes} from 'react-router-dom';
import Courses from './courses';
export default function Profile({logout1}) {
    const navigate1 = useNavigate();
    function logout(){
        logout1()
            navigate1('login')
    }
  return (
    <div>Profile Page

<button onClick={logout}>LOGOUT</button>
<Routes>
    <Route path='/courses' element={<Courses/>}/>
</Routes>
    </div>
  )
}
