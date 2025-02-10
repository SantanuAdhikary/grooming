import React from 'react'

const Card = (props) => {

    console.log(props)

    let {productName , price, imageSrc} = props;
  return (
    <>

        <div className="box">

        <img src={imageSrc} alt="" />

        <h2> Product Name : {productName} </h2>
        <h3> Price: {price}</h3>
        </div>
        
    </>
  )
}

export default Card