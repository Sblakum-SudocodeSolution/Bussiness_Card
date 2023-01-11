import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FontSizeChanger from "react-font-size-changer";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import { useDispatch } from "react-redux";
import { setText } from "../../Store/Actions/TextActions";

export default function AddText() {
  const dispatch = useDispatch();
  const [textval, setTextVal] = useState("");

  const addText = () => {
    dispatch(setText(textval));
  };

  const onTextChange = (elem) => {
    const { value } = elem.target;
    setTextVal(value);
  };

  return (
    <>
      <div className="mt-5">
        <TextField
          id="outlined-basic"
          name="inputText"
          autoComplete="off"
          label="Add Text"
          variant="outlined"
          onChange={(elem) => onTextChange(elem)}
        />
        <br />
        <Button
          variant="contained"
          sx={{ mt: "3vh" }}
          onClick={() => addText()}
        >
          Add
        </Button>
      </div>
      <FontSizeChanger
        targets={[" #target .text"]}
        onChange={(element, newValue, oldValue) => {}}
        options={{
          stepSize: 2,
          range: 10,
        }}
        customButtons={{
          up: <TextIncreaseIcon />,
          down: <TextDecreaseIcon />,
          style: {
            backgroundColor: "#0066FF",
            color: "white",
            WebkitBoxSizing: "border-box",
            WebkitBorderRadius: "5px",
            width: "60px",
            marginTop: "10vh",
            cursor: "pointer",
          },
          buttonsMargin: 10,
        }}
      />
    </>
  );
}
