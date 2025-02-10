import React from 'react'

const Foooter = (props) => {

    let {msg} = props
  return (
    <>
      <footer>
         <p> &copy; {msg} </p>
      </footer>
    </>
  )
}

export default Foooter