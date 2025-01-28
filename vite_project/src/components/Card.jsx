
let Card =(props)=>{

    console.log(props)
    return (

        <>

        <div className="card">
             <h1> product name: {props.cardName}</h1>

             <p> Price is : {props.price}</p>

        </div>
        </>
    )
}

export default Card;


// import React, { Component } from 'react'

// export default class Card extends Component {
//   render() {
//     return (
//       <div className='card'>Card</div>
//     )
//   }
// }
