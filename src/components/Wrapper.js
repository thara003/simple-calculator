import React from 'react'
import Button from './Button'
import Screen from './Screen'

const Wrapper = () => {
    return (
        <div className = 'wrapper'>
           <Screen />
           <div className='keypad'>
           <Button  color = 'red' value = "AC"></Button>
           <Button  color = 'yellow' value = "C"></Button>
           <Button  color = 'rgb(47, 255, 99)' value = "%"></Button>
           <Button  color = 'rgb(47, 255, 99)' value = "/"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "7"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "8"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "9"></Button>
           <Button  color = 'rgb(47, 255, 99)' value = "x"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "4"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "5"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "6"></Button>
           <Button  color = 'rgb(47, 255, 99)' value = "+"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "1"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "2"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "3"></Button>
           <Button  color = 'rgb(47, 255, 99)' value = "-"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "00"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "0"></Button>
           <Button  color = 'rgb(158, 255, 47)' value = "."></Button>
           <Button  color = 'rgb(47, 255, 255)' value = "="></Button>
           </div>
        </div>
    )
}

export default Wrapper

