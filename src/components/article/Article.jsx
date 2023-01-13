import React from 'react'
import "./Article.css"

function Article({ image, title }) {
  return (
    <div className='gpt3__artile'>
      <div className="gpt3__article-container">
        <div className="gpt3__article-container-image">
          <img src={image} alt="" />
        </div>
        <div className="gpt3__article-container-content">
          <p>Jan 13 2023</p>
          <h2>{title}</h2>

          <p>Read More Article</p>

        </div>
      </div>

    </div>
  )
}

export default Article
