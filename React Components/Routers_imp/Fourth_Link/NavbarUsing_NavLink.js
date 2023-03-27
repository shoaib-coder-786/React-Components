import React from 'react'
import { NavLink,Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
  <NavLink to="/"   style={({isActive})=>{
                        return {color:isActive ?'red' : ''}
            }}>   
            Home
            </NavLink> ||


            <NavLink to="/about" style={({isActive})=>{
                return {color:isActive ?'red' : ''}
            }}>    About</NavLink> |


            <Link to="/contact"> Contact</Link>
        </>
    )
}

/* The NavLink is used when you want to highlight a link as active.
 So, on every routing to a page, 
the link is highlighted according to the activeClassName .
 Link is for links that need no highlighting. And a is for external links.*/
