import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

       <nav>
          <div className="left">

            <h1> MyLogo</h1>

          </div>

          <div className="right">

                <ul>
                   <NavLink to="/"><li>Home</li></NavLink> 
                   <NavLink to="/about"><li>About</li></NavLink> 
                   <NavLink to="/contact"><li>Contact Us</li></NavLink> 
                   <NavLink to="/conditions"><li> Conditions</li></NavLink> 
                   <NavLink to="/events"><li> Events</li></NavLink> 
                    
                </ul>

          </div>
       </nav>

    </>
  )
}

export default Navbar