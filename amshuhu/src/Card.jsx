

import React from 'react'

const Card = (props) => {

  console.log(props)

  let {product , price}  = props
  return (
    <>

         <div className="card">

          <p> product name :  {product } </p>

          <p> price : {props.price} </p>

         </div>
    </>
  )
}

export default Card