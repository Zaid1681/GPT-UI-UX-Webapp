import React from 'react'
import "./FeatureElement.css"

function FeatureElement({title , text}) {
  return (
    <div className='gpt3__FeatureElement '>
        <div className="gpt3__FeatureElement-header">
            <div></div>
        <h1>{title}</h1>
        </div>

        <p>{text}</p>
      
    </div>
  )
}

export default FeatureElement
