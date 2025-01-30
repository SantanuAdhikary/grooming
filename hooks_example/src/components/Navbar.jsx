import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>


          {/* <ul>

           <a href="/"><li> Home</li></a>  
           <a href="/about"><li> About</li></a>  
           <a href="/contact"><li> Contact</li></a>  
           
          </ul> */}
          <ul>

           <NavLink to="/"><li> Home</li></NavLink>  
           <NavLink to="/about"><li> About</li></NavLink>  
           <NavLink to="/contact"><li> Contact</li></NavLink>  
           <NavLink to="/usestate"><li> Usestate</li></NavLink>  
           
          </ul>

    </>
  )
}

export default Navbar