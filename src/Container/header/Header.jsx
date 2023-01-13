import React from 'react'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import "./Header.css"

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        
        <h1 className="gradient__text">
          Let's Build something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque obcaecati, et magni facere ullam iusto architecto, at est eveniet numquam consequuntur nulla, tenetur qui enim sit minima ex. Hic commodi corrupti ullam.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>1600 people requested acess in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-content__image">
        <img src={ai} alt="" />
      </div>

    </div>
          

  )
}

export default Header

