import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { actions } from "../../actions/index";
import { leftDrawerWidth } from "../../services/muiTheme";

// mui
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Collapse from "@material-ui/core/Collapse";

// Icons
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import StoreIcon from "@material-ui/icons/StoreOutlined";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ViewListIcon from "@material-ui/icons/ViewListOutlined";
import StorageIcon from "@material-ui/icons/StorageOutlined";
import ShippingIcon from "@material-ui/icons/LocalShippingOutlined";
import BarChartIcon from "@material-ui/icons/BarChartOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import SubDirIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";

const styles = theme => ({
  drawer: {
    width: leftDrawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: leftDrawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listItem: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 2
  },
  listItemIcon: {
    marginRight: theme.spacing.unit
  },
  listItemText: {
    paddingLeft: theme.spacing.unit
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3
  }
});

class LeftDrawer extends Component {
  constructor() {
    super();

    this.state = {
      productListOpen: false,
      demandListOpen: false,
      supplyListOpen: false,
      warehouseListOpen: false,
      logisticsListOpen: false
    };
  }

  handleLeftDrawerClose = () => {
    this.props.actions.closeLeftDrawer();
  };

  handleListOpen = e => {
    e.preventDefault();

    const listName =
      e.target.parentNode.getAttribute("id") ||
      e.target.parentNode.parentNode.getAttribute("id");
    const key = `${listName}ListOpen`;

    this.setState({
      [key]: !!this.state[key] ? false : true
    });
  };

  render() {
    const { classes, leftDrawerOpen } = this.props;
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
          />
          <Divider />

          <List>
            {/* Dashboard */}
            <ListItem
              button
              dense
              key="Dashboard"
              component={Link}
              to="/"
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                fontSize="small"
                className={classes.listItemText}
              />
            </ListItem>
            {/* Product */}
            <ListItem
              button
              component={Link}
              className={classes.listItem}
              dense
              id="product"
              key="Product"
              to="/product"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ViewListIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Product"
                className={classes.listItemText}
              />
              {this.state.productListOpen ? (
                <ExpandLess
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              ) : (
                <ExpandMore
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              )}
            </ListItem>

            <Collapse
              in={this.state.productListOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Product Master"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Product Family"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Bill of Material"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Demand */}
            <ListItem
              button
              component={Link}
              className={classes.listItem}
              dense
              id="demand"
              key="Demand"
              to="/demand"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <StoreIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Demand" className={classes.listItemText} />

              {this.state.demandListOpen ? (
                <ExpandLess
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              ) : (
                <ExpandMore
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              )}
            </ListItem>

            <Collapse
              in={this.state.demandListOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Customer"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Sales Quote"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Sales Order"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Sales Invoice"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Credit Note"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Supply */}
            <ListItem
              button
              component={Link}
              className={classes.listItem}
              dense
              id="supply"
              key="Supply"
              to="/supply"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <CartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Supply" className={classes.listItemText} />

              {this.state.supplyListOpen ? (
                <ExpandLess
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              ) : (
                <ExpandMore
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              )}
            </ListItem>

            <Collapse
              in={this.state.supplyListOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Supplier"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Purchase Order"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Bill"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Warehouse */}
            <ListItem
              button
              component={Link}
              className={classes.listItem}
              dense
              id="warehouse"
              key="Warehouse"
              to="/warehouse"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <StorageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Warehouse"
                className={classes.listItemText}
              />

              {this.state.warehouseListOpen ? (
                <ExpandLess
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              ) : (
                <ExpandMore
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              )}
            </ListItem>

            <Collapse
              in={this.state.warehouseListOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Warehouse"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Inbound"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Outbound"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Logistics */}
            <ListItem
              button
              component={Link}
              className={classes.listItem}
              dense
              id="logistics"
              key="Logistics"
              to="/logistics"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShippingIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Logistics"
                className={classes.listItemText}
              />

              {this.state.logisticsListOpen ? (
                <ExpandLess
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              ) : (
                <ExpandMore
                  fontSize="small"
                  onClick={e => this.handleListOpen(e)}
                />
              )}
            </ListItem>

            <Collapse
              in={this.state.logisticsListOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Carrier"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Inbound"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button dense className={classes.nested}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <SubDirIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary="Outbound"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Collapse>

            {/* Report */}
            <ListItem
              button
              dense
              key="Report"
              component={Link}
              to="/report"
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <BarChartIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Report" className={classes.listItemText} />
            </ListItem>
          </List>

          <Divider />

          {/* Integration */}
          <List>
            <ListItem
              button
              dense
              key="Integration"
              component={Link}
              to="/integration"
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShareIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Integration"
                className={classes.listItemText}
              />
            </ListItem>

            <ListItem
              button
              dense
              key="Setting"
              component={Link}
              to="/setting"
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Setting"
                className={classes.listItemText}
              />
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
