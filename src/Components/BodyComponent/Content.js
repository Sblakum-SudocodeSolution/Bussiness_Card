import React, { useRef } from "react";
import DispImage from "./DispImage";
import DispShape from "./DispShape";
import DispText from "./DispText";
import * as htmlToImage from "html-to-image";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";

export default function Content() {
  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <>
      <div
        id="domEl"
        ref={domEl}
        style={{
          width: "100%",
          position: "fixed",
          height: "100vh",
          display: "inline",
        }}
      >
        <DispImage />
        <DispShape />
        <DispText />
        <Button
          style={{
            marginTop: "-9vh",
            marginLeft: "107vh",
            position: "fixed",
            border: "none",
          }}
          onClick={downloadImage}
        >
          <SaveIcon />
        </Button>
      </div>
    </>
  );
}
