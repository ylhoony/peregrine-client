import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { actions } from "../../actions/index";

// mui
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";

import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import StoreIcon from "@material-ui/icons/StoreOutlined";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ViewListIcon from "@material-ui/icons/ViewListOutlined";
import StorageIcon from "@material-ui/icons/StorageOutlined";
import ShippingIcon from "@material-ui/icons/LocalShippingOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRightOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 200;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "2 8px",
    justifyContent: "flex-end"
  }
});

class LeftDrawer extends Component {
  handleLeftDrawerClose = () => {
    this.props.actions.closeLeftDrawer();
  };

  render() {
    const { classes, leftDrawerOpen, theme } = this.props;

    console.log("left drawer props: ", this.props);
    return (
      <Fragment>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={leftDrawerOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar
            disableGutters={true}
            variant="dense"
            className={classes.drawerHeader}
          >
            <IconButton onClick={() => this.handleLeftDrawerClose()}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon fontSize="small" />
              ) : (
                <ChevronRightIcon fontSize="small" />
              )}
            </IconButton>
          </Toolbar>

          <Divider />
          <List>
            <ListItem button dense key="Dashboard" component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" fontSize="small" />
            </ListItem>

            <ListItem button dense key="Product" component={Link} to="/product">
              <ListItemIcon>
                <ViewListIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItem>

            <ListItem button dense key="Demand" component={Link} to="/demand">
              <ListItemIcon>
                <StoreIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Demand" />
            </ListItem>

            <ListItem button dense key="Supply" component={Link} to="/supply">
              <ListItemIcon>
                <CartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Supply" />
            </ListItem>

            <ListItem
              button
              dense
              key="Warehouse"
              component={Link}
              to="/warehouse"
            >
              <ListItemIcon>
                <StorageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Warehouse" />
            </ListItem>

            <ListItem
              button
              dense
              key="Logistics"
              component={Link}
              to="/logistics"
            >
              <ListItemIcon>
                <ShippingIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logistics" />
            </ListItem>

            <ListItem button dense key="Report" component={Link} to="/report">
              <ListItemIcon>
                <BarChartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              dense
              key="Integration"
              component={Link}
              to="/integration"
            >
              <ListItemIcon>
                <ShareIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Integration" />
            </ListItem>

            <ListItem button dense key="Setting" component={Link} to="/setting">
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
          </List>
        </Drawer>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = ({ layouts }) => {
  return {
    leftDrawerOpen: layouts.leftDrawerOpen
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeftDrawer)
);
