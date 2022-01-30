import React from "react";
import { useState } from "react";
import Screen from "./Screen";

const Wrapper = () => {
  const [screen, setScreen] = useState({ display: "" });

  const displayChange = (e) => {
    setScreen({ display: e.target.value });
    
  };

  return (
    <div className="wrapper">
      <Screen display={screen.display}></Screen>
      <div className="keypad">
        <input
          type="button"
          value={"AC"}
          style={{ backgroundColor: "rgb(255, 00, 00)" }}
          className="button"
        />
        <input
          type="button"
          value={"C"}
          style={{ backgroundColor: "rgb(255, 250, 00)" }}
          className="button"
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
