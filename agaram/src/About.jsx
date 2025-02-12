import React from 'react'
import './About.css'


const About = () => {

  let subjects = ["html","css","js","react","node","express","mongodb","java","python","sql","angular","view","django","springboot","flutter","react native"]

   
  return (
    <>

    <main>

        <h1> I am about Page</h1>

    </main>
     <div className="AboutContainer">


        <h2> Example Of List</h2>

        {
           subjects.map((sub,index)=>{
                return(
                  <li key={index}> {sub} </li>
                )
           })
        }
       
     </div>
    
    
    
    </>
  )
}

export default About