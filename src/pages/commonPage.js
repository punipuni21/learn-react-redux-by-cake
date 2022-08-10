import React, { Component } from "react";
// import commonStyle from "../const/commonStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core";

class CommonPage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CANDY CHUPS PAatisserie
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default CommonPage;
