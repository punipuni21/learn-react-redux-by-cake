import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import commonStyle from "../const/commonStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CakeIcon from "@material-ui/icons/Cake";
import KitchenIcon from "@material-ui/icons/Kitchen";
import { ThemeProvider } from "@material-ui/styles";
import ListTable from "../components/listTable";
import CakeListSetting from "../const/cakeList";
import MaterialListSetting from "../const/materialList";
import { connect } from "react-redux";
import {
  setCakeStock,
  sellCake,
  makeCake,
  buyMaterial,
} from "../action/cakeListAction";
import {
  setMaterialStock,
  consumeMaterial,
  refillMaterial,
} from "../action/materialListAction";

function mapStateToProps(state) {
  return state;
}

class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.sellCake = this.sellCake.bind(this);
    this.makeCake = this.makeCake.bind(this);
    this.refillMaterial = this.refillMaterial.bind(this);
  }
  makeCake(name) {
    this.props.dispatch(makeCake(name));
    this.props.dispatch(consumeMaterial(name));
  }

  sellCake(name, price) {
    this.props.dispatch(sellCake(name, price));
  }

  refillMaterial(name, price) {
    this.props.dispatch(refillMaterial(name));
    this.props.dispatch(buyMaterial(price));
  }

  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "area-controls": `full-width-tabpanel-${index}`,
    };
  }

  handleChange() {
    this.setState({
      value: this.state.value === 0 ? 1 : 0,
    });
  }

  handleChangeIndex(index) {
    this.setState({
      value: index,
    });
  }

  componentDidMount() {
    this.props.dispatch(setCakeStock(CakeListSetting.initialList));
    this.props.dispatch(setMaterialStock(MaterialListSetting.initialList));
  }

  render() {
    const theme = commonStyle();
    const { cakeProps, materialProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CANDY CHUPS Patisserie
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h3" color="secondary">
          ???????????????:{cakeProps.funds}???
        </Typography>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={() => this.handleChange()}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            area-label="full width tabs example"
          >
            <Tab
              label="?????????????????????"
              icon={<CakeIcon />}
              {...this.a11yProps(0)}
            />
            <Tab
              label="????????????"
              icon={<KitchenIcon />}
              {...this.a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rt1" ? "x-revers e" : "x"}
          index={this.state.value}
          onChangeIndex={() => this.handleChangeIndex()}
        >
          <div value={this.state.value} index={0} dir={theme.direction}>
            <ListTable
              tableSetting={CakeListSetting.tableSetting}
              data={cakeProps.cakeList}
              sellHandler={this.sellCake}
              refillHandler={this.makeCake}
            />
          </div>
          <div value={this.state.value} index={1} dir={theme.direction}>
            <ListTable
              tableSetting={MaterialListSetting.tableSetting}
              data={materialProps.materialList}
              refillHandler={this.refillMaterial}
            />
          </div>
        </SwipeableViews>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(CommonPage);
