import React, { Component } from "react";
import commonStyle from "../const/commonStyle";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core";
import { MultiThemeProvider } from "@material-ui/core";

class CommonPage extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <AppBar>
          <Toolbar>
            <Typography>CANDY CHUPS PAatisserie</Typography>
          </Toolbar>
        </AppBar>
      </MultiThemeProvider>
    );
  }
}

export default CommonPage;
