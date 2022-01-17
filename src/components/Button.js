import React from 'react'
// impor

function Button({color,value}) {
    return (
        <button style={{backgroundColor: color}} className='button'>{value}</button>
    )
}

export default Button
