import React from 'react'
import { useState } from 'react'

const UseStateExample = () => {


        let [count , setCount]  =  useState(0)

    let num1 = 5

    let increase =()=>{

        num1 = num1 + 1;
        console.log(num1)

    }

    let increment =()=>{
        setCount(count = count+1)
    }
    let decrement =()=>{
        setCount(count = count-1)
    }
  return (
    <>

    <h1>UseStateExample</h1>

      <h2> {num1}</h2>

      <button onClick={increase}>increase</button>


      <h2>{count}</h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

    
    </>
  )
}

export default UseStateExample