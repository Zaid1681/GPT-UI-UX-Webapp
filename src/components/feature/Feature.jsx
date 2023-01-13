import React from 'react'
import "./Feature.css"
function Featurecomp({title , text}) {
  return (
    <div className='gtp3__feature-component'>
      <div ></div>
      <h1 >{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Featurecomp
