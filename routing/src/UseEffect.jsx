import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {

    let [count,setCount] = useState(0)
    let [uname, setUname] = useState("rohit")

    // let getData = async()=>{
    //     let res = await fetch("")
    //     let data = await res.json()
    // }

    // getData()

     useEffect(()=>{
        console.log("useeffect with empty array depencency")
     },[])


     useEffect(()=>{
        console.log("hello with dependency")
     },[count])

     useEffect(()=>{
        console.log("hi without dependency")
     },)
  return (
    <>

    <h1> UseEffect</h1>

    <h2> {count}</h2>

    <h1> {uname}</h1>

    <button onClick={()=>setCount(count = count + 1)}>click</button>

    <button onClick={()=> setUname("santanu")}>changeName</button>
    </>
  )
}

export default UseEffect