import { useState } from 'react'
import './App.css'
import { Header, Footer, Possibility, WhatGpt, Blog, Feature, Cta , Blogging } from "./Container"
import { Navbar, Featurecomp, Brand, Article } from './components'



function App() {

  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Feature />
      <Possibility />
      <Cta/>
      <Blogging />
      <Footer />
    </div>

  )
}

export default App
