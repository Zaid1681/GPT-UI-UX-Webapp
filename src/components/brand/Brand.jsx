import React from 'react'
import "./Brand.css"
import { atlassian, dropbox, slack , shopify , google } from "./import"

function Brand() {
  return (
    <div className='gpt3__brand section__header'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
      
    </div>
  )
}

export default Brand
