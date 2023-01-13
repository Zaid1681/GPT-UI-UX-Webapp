import React from 'react'
import "./Possibility.css"
import possibilityImage from "../../assets/Possibility.png"

function Possibility() {
  return (
    <div className='gpt3__possiblity section__padding'>
      <div className="gpt3__feature-container-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__feature-container-data">
        <h4>Request Early to Get Started</h4>
        <h1 className='gradient__text'>The Possibility are beyond your imagination</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quisquam amet inventore sunt facere excepturi deserunt at. Perspiciatis nesciunt voluptas eum magnam non dicta ratione aliquid excepturi, expedita, ut praesentium doloremque dolores.</p>
        <h4>Request Early to Get Started</h4>
      </div>
      
    </div>
  )
}

export default Possibility
