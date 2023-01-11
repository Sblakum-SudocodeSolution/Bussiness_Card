import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

export default function DispText() {
  const textInStore = useSelector((state) => state.text);

  console.log(textInStore.text);

  return (
    <>
      <div id="target" style={{ position: "fixed" }}>
        <Draggable
          handle=".text"
            bounds={{ left: 0, top: -50, right: 600, bottom: 400 }}
        >
          <h1 style={{ width: "5%" }} className="text">
            {textInStore.text}
          </h1>
        </Draggable>
      </div>
    </>
  );
}
