import React from 'react'
import { Featurecomp } from '../../components'
import "./Feature.css"
import FeatureElement from './FeatureElement'

function Feature() {
  const data = [
    {
      title: "Improving and distrust Easily",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nulla cupiditate ipsa asperiores tempore. Fugiat nostrum delectus voluptatum necessitatibus!"

    },
    {
      title: "Become the intended active",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nulla cupiditate ipsa asperiores tempore. Fugiat nostrum delectus voluptatum necessitatibus!"

    },
    {
      title: "Message or am nothing ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nulla cupiditate ipsa asperiores tempore. Fugiat nostrum delectus voluptatum necessitatibus!"

    } ,
    {
      title: "Really Boy County ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure nulla cupiditate ipsa asperiores tempore. Fugiat nostrum delectus voluptatum necessitatibus!"

    }
  ]
  return (
    <div className='gpt3__feature section__margin'>
      <div className="gpt3__feature-feature-container">
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize.
          Step it into Future Toaday and Make it Happen</h1>
        <p  className='gradient__text'>Request Early acess to get started</p>
      </div>
      <div className="gpt3__feature-feature-components">
         {data.map((item , index) =>(
          <FeatureElement title={item.title} text={item.text}/>
         
         ))}

      </div>



    </div>
  )
}

export default Feature
