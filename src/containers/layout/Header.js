import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import authentication from "../../services/authentication";

// mui
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

// dropdown

const styles = theme => ({
  navLeft: {
    display: "flex",
    justifyContent: "flex-start"
  },
  navRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  selectSelect: {
    fontSize: "0.875rem",
    // height: "100%",
    paddingTop: theme.spacing.unit * 0.75,
    paddingLeft: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 0.75,
    paddingRight: theme.spacing.unit
  },
  menuItem: {
    fontSize: "0.875rem",
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
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
  constructor(props) {
    super(props);

    this.state = {
      account: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSignOut = () => {
    console.log("sign out!");
    authentication.removeToken();
    this.props.history.push("/signin");
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar
          position="fixed"
          className={this.props.appBarClassName}
          color="inherit"
        >
          <Toolbar variant="dense" classes={{ dense: classes.toolbar }}>
            <div className={classes.navLeft}>
              <IconButton
                color="inherit"
                onClick={this.props.handleLeftDrawerDisplay}
              >
                <MenuIcon fontSize="small" />
              </IconButton>

              <Select
                value={this.state.account}
                onChange={this.handleChange}
                disableUnderline
                displayEmpty
                name="account"
                className={classes.selectSelect}
              >
                <MenuItem value="" className={classes.menuItem}>
                  <em>Select Company</em>
                </MenuItem>
                <MenuItem value={10} className={classes.menuItem}>
                  Test Product Lab
                </MenuItem>
                <MenuItem value={20} className={classes.menuItem}>
                  Outpeak Services Inc., USA
                </MenuItem>
                <MenuItem value={30} className={classes.menuItem}>
                  Nike Golf
                </MenuItem>
              </Select>
            </div>

            <div className={classes.navRight}>
              {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon fontSize="small" />
                </div>
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div> */}
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

export default withStyles(styles)(withRouter(Header));
