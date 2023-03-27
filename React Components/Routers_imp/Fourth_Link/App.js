import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
// import NavBar from './NavBar';
import NavbarUsingNavLink from './NavbarUsing_NavLink'
import Error from './Error';
import ContactUsNavigate from './Contact_us_navigate';
function App() {
  return (
   <>
 <h1>Router :- Single page Application , Without Loading, with React</h1>
  
{/* <NavBar/> */}
<NavbarUsingNavLink/>
<br />
    <Routes>
<Route path='/' element= { <Home/> } />
<Route path='/about' element= { <About/> } />
<Route path='/contact' element= { <ContactUsNavigate/> } />
<Route path='*' element = {<Error/>} />


    </Routes>


   </>
  )
}
export default App;