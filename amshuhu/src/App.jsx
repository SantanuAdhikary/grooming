import { Fragment } from "react"
import Home from "./Home"
import Student from "./Student";
import Emp from "./Emp";


function App()
{

   let a = 10 ;
   let myName = "rahul"

   let subjects = ['html','js','css','react','node']

   let isStudent = false

   let display =(myName)=>{
    alert(` hello how are you ${myName}` )
   }

   let hi =()=>{
    alert("Hi")
   }

  return(

    <>

        <h1> hello i am app component</h1>

        <h2> {a} </h2>

        <h3> my name is : {myName}</h3>

       {
         subjects.map((ele,index)=>{
          return(
            <li key={index}> {ele} </li>
          )
         })
       }

       {
         isStudent? <h1> i am student </h1>  : <h1> i am not student </h1>
       }


     {
       isStudent && <Student/> 
     }
        <hr />
      

      <button onClick={hi}> click</button>

      <button onClick={()=>display("santanu")}> click me</button>
        <Home/>
    </>

  
  )
}

export default App