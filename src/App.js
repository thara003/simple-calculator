import React from 'react'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
const App = () => {
  return (
    <div className = 'container'>
      <div className = 'header'>
      <Header></Header>
      </div>
      <div className = 'wrapper'>
      <Wrapper></Wrapper>
      </div>
    </div>
  )
}


export default App

