import React from "react";
import { IconButton } from "@mui/material";
import { Circle } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import SquareIcon from "@mui/icons-material/Square";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import FontSizeChanger from "react-font-size-changer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { setShape } from "../../Store/Actions/ShapeActions";
import { setSquare } from "../../Store/Actions/ShapeActions";
import { setStar } from "../../Store/Actions/ShapeActions";

export default function AddShape() {
  const dispatch = useDispatch();

  const addCircle = (elem) => {
    dispatch(setShape(<Circle sx={{ fontSize: 100, color: green[900] }} />));
  };

  const addStar = (elem) => {
    dispatch(
      setStar(<StarRateIcon sx={{ fontSize: 100, color: green[900] }} />)
    );
  };

  const addSquare = (elem) => {
    dispatch(
      setSquare(<SquareIcon sx={{ fontSize: 100, color: green[900] }} />)
    );
  };

  return (
    <>
      <div className="mt-5">
        <IconButton onClick={addCircle}>
          <Circle sx={{ fontSize: 60, color: blue[900] }} />
        </IconButton>
        <IconButton onClick={addStar}>
          <StarRateIcon sx={{ fontSize: 60, color: blue[900] }} />
        </IconButton>
        <IconButton onClick={addSquare}>
          <SquareIcon sx={{ fontSize: 60, color: blue[900] }} />
        </IconButton>

        <FontSizeChanger
          targets={[" #target .shape"]}
          onChange={(element, newValue, oldValue) => {}}
          options={{
            stepSize: 2,
            range: 10,
          }}
          customButtons={{
            up: <AddCircleOutlineIcon />,
            down: <RemoveCircleOutlineIcon />,
            style: {
              backgroundColor: "#0066FF",
              color: "white",
              WebkitBorderRadius: "5px",
              width: "60px",
              marginTop: "10vh",
              cursor: "pointer",
            },
            buttonsMargin: 10,
          }}
        />
      </div>
    </>
  );
}
