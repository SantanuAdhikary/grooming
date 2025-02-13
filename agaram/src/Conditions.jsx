import React from 'react'
import Player from './Player'
import Student from './Student'

const Conditions = () => {

    let isPlayer = true
  return (
    <>

    <h1> Conditions in react</h1>

    {
        isPlayer ? <h1> He is a player</h1> : <h1> he is a student</h1>
    }

    <hr />

    {
        isPlayer ? <Player/> : <Student/>
    }

    <hr />

    {
        isPlayer && <Player/>
    }
    
    </>
  )
}

export default Conditions
