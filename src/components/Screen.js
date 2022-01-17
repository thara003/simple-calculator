// import React from 'react'

const Screen = (props) => {
    return (
        <div className = 'screen'>
            <h3>{props.screen}</h3>
        </div>
    )
}

Screen.defaultProps = {
    screen: "Type something!!"
}

export default Screen

