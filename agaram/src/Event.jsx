import React from 'react'

const Event = () => {


    let display =()=>{
        alert("you have clicked...")
    }

    let msg =(userName)=>{

        alert(`welcome , ${userName} `)

    }
  return (
    <>

    <h1> Events in react</h1>


    <button onClick={display}> click me</button>

    <button onClick={ ()=> display()}> second click</button>

    <button onDoubleClick={()=>msg("san")}> double click me</button>
    
    </>
  )
}

export default Event