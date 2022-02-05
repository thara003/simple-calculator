import React from "react";
import { useState } from "react";
import Screen from "./Screen";

const Wrapper = (props) => {
  const [screen, setScreen] = useState({ display: "" });
  // let expression = [];

  const displayChange = (e) => {
    props.expression.push(e.target.value);
    setScreen({ display: props.expression});
    console.log(props.expression);
    
  };

  const eraseDisplay = (e) => {
    e.preventDefault();
    props.expression.pop();
    setScreen({ display: props.expression });
    console.log(props.expression);
  };

  const clearDisplay = (e) => {
    e.preventDefault();
    if (props.expression.length > 0) {
      props.expression.length = 0;
      setScreen({ display: props.expression });
      console.log("cleared");
    }
    
  }

  return (
    <div className="wrapper">
      <Screen display={screen.display}></Screen>
      <div className="keypad">
        <input
          type="button"
          value={"AC"}
          style={{ backgroundColor: "rgb(255, 00, 00)" }}
          className="button"
          onClick ={clearDisplay}
        />
        <input
          type="button"
          value={"C"}
          style={{ backgroundColor: "rgb(255, 250, 00)" }}
          className="button"
          onClick={eraseDisplay}
        />
        <input
          type="button"
          value={"%"}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"/"}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"7"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"8"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"9"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"x"}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"4"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"5"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"6"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"+"}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"1"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"2"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"3"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"-"}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"00"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"0"}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"."}
          style={{ backgroundColor: "rgb(158, 255, 47)" }}
          className="button"
          onClick={displayChange}
        />
        <input
          type="button"
          value={"="}
          style={{ backgroundColor: "rgb(47, 255, 99)" }}
          className="button"
        />
        
      </div>
    </div>
  );
};

export default Wrapper;
