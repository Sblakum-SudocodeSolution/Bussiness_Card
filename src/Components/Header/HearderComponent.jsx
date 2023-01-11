import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import AddText from "../BodyComponent/AddText";
import AddShape from "../BodyComponent/AddShape";
import AddImage from "../BodyComponent/AddImage";
import Content from "../BodyComponent/Content";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper1}>
        <Routes>
          <Route path="/" element={<AddText />} />
          <Route exact path="/shape" element={<AddShape />} />
          <Route path="/image" element={<AddImage />} />
        </Routes>
      </Box>
      <Box className={classes.wrapper2}>
        <Content />
      </Box>
    </Fragment>
  );
}
