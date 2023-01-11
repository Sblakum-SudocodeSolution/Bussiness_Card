import React, { useState } from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import "react-image-crop/dist/ReactCrop.css";

export default function DispImage() {
  const imageInStore = useSelector((state) => state.image);

  return (
    <>
      <div id="target" style={{ position: "fixed" }}>
        <Draggable bounds={{ left: 10, top: 80, right: 280, bottom: 200 }}>
          {imageInStore.image ? (
            <img
              className="img"
              src={imageInStore.image}
              width="400"
              height="400"
            />
          ) : (
            <img src={imageInStore.image} width="0" height="0" />
          )}
        </Draggable>
      </div>
    </>
  );
}
