import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

export default function DispShape() {
  const shapeInStore = useSelector((state) => state.shape);
  const squareInStore = useSelector((state) => state.square);
  const starInStore = useSelector((state) => state.star);

  return (
    <>
      <div className="main" style={{padding:"10vh"}}>
        <div id="target" style={{ display: "flex", position:"fixed"}}>
          <Draggable
            handle=".shape"
            bounds={{ left: -60, top: 0, right: 530, bottom: 450 }}
          >
            <h1 style={{ width: "5%"}} className="shape">
              {shapeInStore.shape}
            </h1>
          </Draggable>

          <Draggable
            handle=".shape"
            bounds={{ left: -150, top: 0, right: 450, bottom: 450 }}
          >
            <h1 style={{ width: "5%", marginLeft:"10vh"}} className="shape">
              {starInStore.star}
            </h1>
          </Draggable>

          <Draggable
            handle=".shape"
            bounds={{ left: -230, top: 0, right: 370, bottom: 450 }}
          >
            <h1 style={{ width: "5%", marginLeft:"10vh"}} className="shape">
              {squareInStore.square}
            </h1>
          </Draggable>
        </div>
      </div>
    </>
  );
}
