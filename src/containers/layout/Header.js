import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authentication from "../../services/authentication";
import { actions } from "../../actions/index";
import Breadcrumb from "../../components/shared/Breadcrumb";

// mui
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { fade } from "@material-ui/core/styles/colorManipulator";

// Icons
import MenuIcon from "@material-ui/icons/MenuOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import EjectIcon from "@material-ui/icons/EjectOutlined";

const drawerWidth = 200;

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  //
  navLeft: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start"
  },
  navRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      paddingLeft: "4px",
      paddingRight: "4px"
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "12px",
      paddingRight: "12px"
    }
  }
});

class Header extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSignOut = () => {
    console.log("sign out!");
    authentication.removeToken();
    this.props.history.push("/signin");
  };

  handleLeftDrawerOpen = () => {
    this.props.actions.openLeftDrawer();
  };

  render() {
    const { classes, leftDrawerOpen } = this.props;
    // console.log("header props", this.props);

    return (
      <Fragment>
        <AppBar
          color="default"
          position="fixed"
          className={classNames(
            classes.appBar,
            leftDrawerOpen && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={true}
            variant="dense"
            classes={{ dense: classes.toolbar }}
          >
            <div className={classes.navLeft}>
              <IconButton
                aria-label="Open drawer"
                color="inherit"
                fontSize="small"
                onClick={() => this.handleLeftDrawerOpen()}
                className={classNames(leftDrawerOpen && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Breadcrumb />
            </div>

            <div className={classes.navRight}>
              <IconButton color="inherit">
                <SearchIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/profile">
                <PersonIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" onClick={() => this.handleSignOut()}>
                <EjectIcon fontSize="small" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
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
    leftDrawerWidth: layouts.leftDrawerWidth,
    leftDrawerOpen: layouts.leftDrawerOpen
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Header))
);
