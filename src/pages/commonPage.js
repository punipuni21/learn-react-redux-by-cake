import React, { Component } from "react";
import commonStyle from "../const/commonStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";
import ListTable from "../components/listTable";
import CakeListSetting from "../const/cakeList";

class CommonPage extends Component {
  render() {
    const theme = commonStyle();
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CANDY CHUPS Patisserie
            </Typography>
          </Toolbar>
        </AppBar>
        <ListTable
          tableSetting={CakeListSetting.tableSetting}
          data={CakeListSetting.initialList}
        ></ListTable>
      </ThemeProvider>
    );
  }
}

export default CommonPage;
