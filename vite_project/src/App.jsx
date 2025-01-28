import React, { Fragment } from 'react'
import Home from './components/Home'
import Card from './components/Card'

const App = () => {

  let myName = "rahul"
  console.log(myName)
  return (
    <>

     <div className="section">

         <Card cardName = {"product1"} price={90} />
         <Card cardName = {"product2"} price={100}/>
         <Card  cardName = {"product3"} price={190}/>
        
     </div>



        <h1> {myName} </h1>

        <hr />

        <Home/>
        <Home/>
        <Home/>
        <Home/>
       
    </>

  
  )
}

export default App