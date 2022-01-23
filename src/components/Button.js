import React from "react";


function Button({ color, label }) {
  const onclick = (e) => {
    console.log(e.target.value);
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
