import React from 'react'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
const App = () => {
  return (
    <div className = 'container'>
      <div className = 'header'>
      <Header></Header>
      </div>
      <div className = 'wrapper'>
      <Wrapper>
        <div className = 'screen'>
        <Screen></Screen>
        </div>
        
      </Wrapper>
      </div>
    </div>
  )
}


export default App

