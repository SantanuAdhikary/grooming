import React from 'react'
import UsestateExample from './components/UsestateExample'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notfound from './components/Notfound'
import Navbar from './components/Navbar'
import UseEffectExample from './components/UseEffectExample'

const App = () => {
  return (
    <>

    {/* <h1> App component</h1>

    <UsestateExample/> */}

        <BrowserRouter>

         <Navbar/>

           <Routes>
               <Route path='/'  element={<Home/>} />
               <Route path='/about'  element={<About/>} />
               <Route path='/contact'  element={<Contact/>} />
               <Route path='/usestate'  element={<UsestateExample/>} />
               <Route path='/useeffect'  element={<UseEffectExample/>} />
               <Route path='*'  element={<Notfound/>} />



           </Routes>
        </BrowserRouter>
    </>
  )
}

export default App