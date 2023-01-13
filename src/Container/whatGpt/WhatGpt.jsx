import React from 'react'
import { Featurecomp } from "../../components/index"
import "./WhatGpt.css"

function WhatGpt() {
  return (
    <div className='gpt3__whatgpt3 section__margin gradient__bg ' id='whatisgpt3' >
      {/* <div></div> */}
      <div>
        <div className="gpt3__whatgpt3-feature">
          <h1>What is GPT-3 </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit atque cumque, numquam facere dicta inventore, asperiores quae rem nisi, ab a natus. Aliquid saepe iusto odio ullam, necessitatibus libero labore possimus?</p>
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">The Possibility are beyond your imagination</h1>
          <p className='gradient__text'>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-feature-container">
          <Featurecomp title={"Chabots"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit atque cumque, numquam facere dicta inventore, asperiores quae rem nisi "} />
          <Featurecomp title={"Knowledgebase"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit atque cumque, numquam facere dicta inventore, asperiores quae rem nisi "} />
          <Featurecomp title={"Education"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit atque cumque, numquam facere dicta inventore, asperiores quae rem nisi "} />


        </div>

      </div>
    </div>
  )
}

export default WhatGpt
