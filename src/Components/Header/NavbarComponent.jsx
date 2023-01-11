import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <Typography variant="h6" className={classes.logo}>
            {"Create Your Own Card"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
