import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Error from './Error';
function App() {
  return (
   <>
 <h1>Router :- Single page Application , Without Loading, with React</h1>
  
<NavBar/>
<br />
    <Routes>
<Route path='/' element= { <Home/> } />
<Route path='/about' element= { <About/> } />
<Route path='*' element = {<Error/>} />

<Route>
    <Route path='/admin' element= {<NavBar/>}   />
    <Route path='/admin' element= {<Home/>}   />
    <Route path='/admin/about' element= {<About/>}   />
</Route>
    </Routes>


   </>
  )
}
export default App;