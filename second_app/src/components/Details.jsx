
import React from 'react'

const Details = (props) => {
  let {productName , price} = props
  return (
    <>

    <div className="details">

      <h1> product name: {props.productName}</h1>
      <h2> Price : {props.price}</h2>
    </div>
    </>
  )
}

export default Details