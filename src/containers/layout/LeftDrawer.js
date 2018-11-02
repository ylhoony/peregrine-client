import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import StoreIcon from "@material-ui/icons/StoreOutlined";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ViewListIcon from "@material-ui/icons/ViewListOutlined";
import StorageIcon from "@material-ui/icons/StorageOutlined";
import ShippingIcon from "@material-ui/icons/LocalShippingOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";

import ShareIcon from "@material-ui/icons/ShareOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";

class LeftDrawer extends Component {
  render() {
    return (
      <Fragment>
        <Drawer
          className={this.props.drawerClassName}
          variant={this.props.drawerVariant}
          classes={this.props.drawerClasses}
        >
          <div className={this.props.toolbarClassName} />
          <List>
            <ListItem button dense key="Dashboard" component={Link} to="/">
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" fontSize="small" />
            </ListItem>

            <ListItem button dense key="Product">
              <ListItemIcon>
                <ViewListIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItem>

            <ListItem button dense key="Demand">
              <ListItemIcon>
                <StoreIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Demand" />
            </ListItem>

            <ListItem button dense key="Supply">
              <ListItemIcon>
                <CartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Supply" />
            </ListItem>

            <ListItem button dense key="Warehouse">
              <ListItemIcon>
                <StorageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Warehouse" />
            </ListItem>

            <ListItem button dense key="Logistics">
              <ListItemIcon>
                <ShippingIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logistics" />
            </ListItem>

            <ListItem button dense key="Report">
              <ListItemIcon>
                <BarChartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button dense key="Integration">
              <ListItemIcon>
                <ShareIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Integration" />
            </ListItem>

            <ListItem button dense key="Settings">
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Drawer>
      </Fragment>
    );
  }
}

export default LeftDrawer;
