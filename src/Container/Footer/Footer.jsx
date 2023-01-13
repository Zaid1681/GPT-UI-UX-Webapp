import React from 'react'
import logo from "../../assets/logo.svg"
import "./Footer.css"

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-header">
        <div className="gpt3__footer-heading">
          <h1 className='gradient__text'>Do You Want to Step in to the future before others</h1>
        </div>
        <div className="gpt3__footer-button">
          <p>Request Early Acess</p>
        </div>
      </div>
      <div className="gpt3__footer-links-container">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="" />
          <p>All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links-content">
          <div className="gpt3_footer-links-dev">
            <h4>Links</h4>
            <p>Overcomes</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3_footer-links-dev">
            <h4>Get in touch</h4>
            <p>cretchedword k12 Dk</p>
            <p>0812-8855</p>
            <p>info@zaid.com</p>
            <p>Contact</p>
          </div>

        </div>
      </div>
      <div className="gpt3__footer-rights">
        <p>c 2023 GPT-3 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
