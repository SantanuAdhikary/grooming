import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

    let [count , setCount] = useState(0)
    let [sname, setSname] = useState("abc")


    useEffect(()=>{
        console.log("sname dependency")
    },[sname])

    useEffect(()=>{
        console.log("I am useeffect")
    },)

    useEffect(()=>{
        console.log("empty array dependency")
    },[])


  return (
    <>

    <h1> UseEffectExample </h1>

    <h2> count is : {count}</h2>

    <h3>{sname}</h3>

    <button onClick={()=>setCount(count = count+1)}>increment</button>
    <button onClick={()=>setSname("mno")}> changeName</button>
    
    </>
  )
}

export default UseEffectExample