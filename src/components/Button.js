import { useState } from "react";
import React from "react";
import Screen from "./Screen";

function Button({ color, label }) {
  const [screen, setScreen] = useState(Screen.screen);
  
  const onclick = (e) => {
    setScreen(e.target.value);
    console.log(screen);
   
  };

  return (

    <input
      type="button"
      value={label}
      style={{ backgroundColor: color }}
      className="button"
      onClick={onclick}
    />
  );
}

Button.defaultProps = {
  color: "rgb(158, 255, 47)",
};



export default Button;
