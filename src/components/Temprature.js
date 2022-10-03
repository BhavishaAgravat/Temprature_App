import React, { useState } from "react";

import Button from "./Button";
import "./Temprature.css";

const Temprature = () => {
  const [backColor, setBackColor] = useState(false);

  const onHighHandler = () => {
    setBackColor(true);
  };

  const onLowHandler = () => {
    setBackColor(false);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: backColor ? "red" : "blue" }}
    >
      <Button onClick={onHighHandler}>High</Button>
      <Button onClick={onLowHandler}>Low</Button>
    </div>
  );
};

export default Temprature;
