import React from 'react'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

const App = () => {
  let expression = [];
  
  return (
    <div className = 'container'>
      <Header></Header>
        <Wrapper expression={expression}></Wrapper>

     
    </div>
  )
}


export default App

