import React from 'react'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

const App = () => {
  let expression = [""];
  let evalexp = [""];
  // let number = "";
  return (
    <div className = 'container'>
      <Header></Header>
        <Wrapper expression={expression} evalexp = {evalexp}></Wrapper>

     
    </div>
  )
}


export default App

