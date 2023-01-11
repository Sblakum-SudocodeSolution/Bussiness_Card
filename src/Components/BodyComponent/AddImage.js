import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setImage } from "../../Store/Actions/ImageAction";

export default function Image() {
  const dispatch = useDispatch();

  const uploadedImage = React.useRef(null);

  const [imageval, setImageVal] = useState("");

  const addImage = (elem) => {
    dispatch(setImage(imageval));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    //

    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        debugger;
        //current.src = e.target.result;
        setImageVal(e.target.result);
        //dispatch(setImage)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <br />
      <div className="App">
        <input
          type="file"
          src={imageval}
          accept="image/*"
          onChange={onImageChange}
          ref={uploadedImage}
        />
        <Button
          variant="contained"
          sx={{ mt: "3vh" }}
          onClick={() => addImage()}
        >
          Add
        </Button>
      </div>
    </>
  );
}
