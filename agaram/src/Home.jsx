import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Card from './Card'
import Foooter from './Foooter'

const Home = () => {
  return (
    <>

    <Navbar/>

    <div className="main">
        <h1> welcome to my webpage</h1>
        Lorem ipsum dolor sit amet consectetur.
    </div>

    <div className="container">

        
          <Card productName = {"mobile"} price= {50000} imageSrc = {"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
          <Card productName = {"laptop"} price= {70000} imageSrc={"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
          <Card productName = {"camera"} price = {60000} imageSrc={"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    </div>
    
    <Foooter  msg={" 2025 , All the best"}/>
    
    </>
  )
}

export default Home