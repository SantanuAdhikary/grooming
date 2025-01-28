import React from 'react'
import Welcome from './Welcome';

const Data = () => {

    let subjectes = ["html","css","js","react","nodejs","express","mongodb"]

    let isPlayer = false;
  return (
    <>

    <h1> List And Key</h1>

    {
        subjectes.map((ele,index)=>{
            return(
               <li key={index}> {ele} </li>
            )
        })
    }

    {
        isPlayer? <h1> I am player</h1> : <h1> I am not a player</h1>
    }
    

     {
         isPlayer ? <Welcome/> : <h1> not player</h1>
     }

     {
        isPlayer && <h1> I am true value</h1>
     }
    </>
  )
}

export default Data