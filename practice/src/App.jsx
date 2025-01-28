

import React from 'react'
import { Fragment } from 'react'
import Card from './component/Card'
import Welcome from './component/Welcome'

const App = () => {

  let myName = "abc"

  let arr = [10,20,30,39]

  let display = false

  let add =()=>{
    alert("i am add function")
  }
  let sub =()=>{
    alert("i am sub function")
  }
  return (
    <Fragment>

      <h1> hello</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis!</p>

      <h2> {myName} </h2>

      {
        arr.map((ele,index)=>{
          return(
            <div className='con' key={index}>{ele}</div>
          )
        })
      }



      <hr />

      <Card no={1}/>
      <Card no={2}/>
      <Card no={3}/>

      <hr />


       {
         display? <Welcome/> : <h1> you can not come..</h1>
       }

       <hr />

       <button onClick={add}> click me</button>

       <button onClick={()=> sub() }>sub</button>
    </Fragment>

  
  )
}

export default App