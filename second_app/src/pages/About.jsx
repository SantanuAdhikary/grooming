import React from 'react'
import Navbar from '../components/Navbar'
import Details from '../components/Details'

const About = () => {
  return (
    <>

     <Navbar/>
      <div className="section">
         
         <Details productName={"product1"} price={100}/>
         <Details productName={"product2"} price={200}/>
      </div>
    </>
  )
}

export default About