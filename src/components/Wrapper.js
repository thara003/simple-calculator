import React from "react";
import Button from "./Button";
import Screen from "./Screen";

const Wrapper = () => {
  const screen = "Type Something!!";

  const Evaluate = () => {
    console.log(screen);
  };

  return (
    <div className="wrapper">
      <Screen screen={screen}></Screen>
      <div className="keypad">
        <Button color="red" label={"AC"}></Button>
        <Button color="yellow" label={"C"}></Button>
        <Button color="rgb(47, 255, 99)" label={"%"}></Button>
        <Button color="rgb(47, 255, 99)" label={"/"}></Button>
        <Button color="rgb(158, 255, 47)" label={"7"}></Button>
        <Button color="rgb(158, 255, 47)" label={"8"}></Button>
        <Button color="rgb(158, 255, 47)" label={"9"}></Button>
        <Button color="rgb(47, 255, 99)" label={"x"}></Button>
        <Button color="rgb(158, 255, 47)" label={"4"}></Button>
        <Button color="rgb(158, 255, 47)" label={"5"}></Button>
        <Button color="rgb(158, 255, 47)" label={"6"}></Button>
        <Button color="rgb(47, 255, 99)" label={"+"}></Button>
        <Button color="rgb(158, 255, 47)" label={"1"}></Button>
        <Button color="rgb(158, 255, 47)" label={"2"}></Button>
        <Button color="rgb(158, 255, 47)" label={"3"}></Button>
        <Button color="rgb(47, 255, 99)" label={"-"}></Button>
        <Button color="rgb(158, 255, 47)" label={"00"}></Button>
        <Button color="rgb(158, 255, 47)" label={"0"}></Button>
        <Button color="rgb(158, 255, 47)" label={"."}></Button>
        <input
          type="button"
          value={"="}
          style={{ backgroundColor: "rgb(47, 255, 255)" }}
          className="button"
          onClick={Evaluate}
        />
      </div>
    </div>
  );
};

export default Wrapper;
