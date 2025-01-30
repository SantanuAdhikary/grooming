import React from 'react'
import Home from './Home'
import About from './About'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './Contact'
import NotFound from './NotFound'
import Navbar from './Navbar'
import UseStateExample from './UseStateExample'
import UseEffect from './UseEffect'

const App = () => {
  return (
    <>


          <BrowserRouter>

           <Navbar/>

             <Routes>
                
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/about' element={<About/>}></Route>
                 <Route path='/contact' element={<Contact/>}></Route>
                 <Route path='/usestate' element={<UseStateExample/>}></Route>
                 <Route path='/useeffect' element={<UseEffect/>}></Route>
                 <Route path='*' element={<NotFound/>}></Route>
             </Routes>
          </BrowserRouter>
     
    
    </>
  )
}

export default App