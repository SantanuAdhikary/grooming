
import React from 'react'

const EventExample = () => {

    let display =()=>{
        alert("hello...")
    }
  return (
    <>

      <h1> event example</h1>

      <button onClick={()=>display()}> click me</button>

    </>
  )
}

export default EventExample